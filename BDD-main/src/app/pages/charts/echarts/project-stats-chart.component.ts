import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ProjetService } from '../../../Services/ProjetService';

@Component({
  selector: 'ngx-project-stats-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class ProjectStatsChartComponent implements OnInit, AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  projectId: number = 1; // Example project ID
  durationDays: number | undefined;
  daysRemaining: number | undefined;
  daysSinceStart: number | undefined;
  percentageElapsed: number | undefined;

  constructor(private theme: NbThemeService, private projetService: ProjetService) {}

  ngOnInit() {
    this.loadProjectStats();
  }

  loadProjectStats() {
    this.projetService.getProjectDurationDays(this.projectId).subscribe(data => {
      console.log('Duration Days:', data);
      this.durationDays = data;
      this.updateChartOptions();
    });
    this.projetService.getDaysRemaining(this.projectId).subscribe(data => {
      console.log('Days Remaining:', data);
      this.daysRemaining = data;
      this.updateChartOptions();
    });
    this.projetService.getDaysSinceStart(this.projectId).subscribe(data => {
      console.log('Days Since Start:', data);
      this.daysSinceStart = data;
      this.updateChartOptions();
    });
    this.projetService.getPercentageTimeElapsed(this.projectId).subscribe(data => {
      console.log('Percentage Elapsed:', data);
      this.percentageElapsed = data;
      this.updateChartOptions();
    });
  }

  updateChartOptions() {
    // Update the chart only when all data is available
    if (this.durationDays !== undefined && this.daysRemaining !== undefined &&
        this.daysSinceStart !== undefined && this.percentageElapsed !== undefined) {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
        const colors = config.variables;
        const echarts: any = config.variables.echarts;

        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight, colors.infoLight, colors.dangerLight, colors.successLight],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Duration Days', 'Days Remaining', 'Days Since Start', 'Percentage Elapsed'],
            textStyle: {
              color: echarts.textColor,
            },
          },
          series: [
            {
              name: 'Project Statistics',
              type: 'bar',  // Using a bar chart for statistics
              data: [
                { value: this.durationDays || 0, name: 'Duration Days' },
                { value: this.daysRemaining || 0, name: 'Days Remaining' },
                { value: this.daysSinceStart || 0, name: 'Days Since Start' },
                { value: this.percentageElapsed || 0, name: 'Percentage Elapsed' },
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
    }
  }

  ngAfterViewInit() {
    // Ensure the chart is updated after the view initializes
    this.updateChartOptions();
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
