import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ProjetService } from '../../../Core/bdd_Services/bdd_ProjetService';

@Component({
  selector: 'ngx-echarts-bar',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(
    private theme: NbThemeService,
    private projetService: ProjetService // Inject the service
  ) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      // Fetch all projects with task counts
      this.projetService.getAllProjectsWithTaskCounts().subscribe(data => {
        // Prepare data for the chart
        const projectNames = data.map((item: any) => item.projectName);
        const taskCounts = data.map((item: any) => item.taskCount);

        // Update the chart options with the fetched data
        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: projectNames, // Dynamic project names
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          series: [
            {
              name: 'Number of Tasks',
              type: 'bar',
              barWidth: '60%',
              data: taskCounts, // Dynamic task counts
            },
          ],
        };
      });
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
