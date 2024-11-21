import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ProjetService } from '../../../Core/bdd_Services/bdd_ProjetService';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  

  constructor(private theme: NbThemeService, private projetService: ProjetService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      // Fetch the counts for each status from the service
      this.projetService.countNotStartedProjects().subscribe(notStartedCount => {
        this.projetService.countInProgressProjects().subscribe(inProgressCount => {
          this.projetService.countCompletedProjects().subscribe(completedCount => {

            // Update the chart options with the retrieved data
            this.options = {
              backgroundColor: echarts.bg,
              color: [colors.warningLight, colors.infoLight, colors.dangerLight],
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Not Started', 'In Progress', 'Completed'],
                textStyle: {
                  color: echarts.textColor,
                },
              },
              series: [
                {
                  name: 'Project Status',
                  type: 'pie',
                  radius: '80%',
                  center: ['50%', '50%'],
                  data: [
                    { value: notStartedCount, name: 'Not Started' },
                    { value: inProgressCount, name: 'In Progress' },
                    { value: completedCount, name: 'Completed' },
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: echarts.itemHoverShadowColor,
                    },
                  },
                  label: {
                    normal: {
                      textStyle: {
                        color: echarts.textColor,
                      },
                    },
                  },
                  labelLine: {
                    normal: {
                      lineStyle: {
                        color: echarts.axisLineColor,
                      },
                    },
                  },
                },
              ],
            };
          });
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
