import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ProjetService } from '../../../Core/bdd_Services/bdd_ProjetService';
import { TacheService } from '../../../Core/bdd_Services/bdd_TacheService';


@Component({
  selector: 'ngx-echarts-radar',
  template: `
    <nb-select placeholder="Select Project" (selectedChange)="onProjectSelect($event)">
      <nb-option *ngFor="let project of projects" [value]="project.idProjet">
        {{ project.nom_Projet }}
      </nb-option>
    </nb-select>
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsRadarComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  projects: any[] = []; // Array to hold projects
  selectedProjectId: number;
  
  indicators = [
    { name: 'Developer', max: 100 },
    { name: 'Manager', max: 100 },
    { name: 'Tester', max: 100 }
  ];

  colors: any; // Add this line to hold color configuration
  echarts: any; // Add this line to hold echarts configuration

  constructor(
    private theme: NbThemeService,
    private tacheService: TacheService,
    private projetService: ProjetService
  ) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables; // Assign colors here
      this.echarts = config.variables.echarts; // Assign echarts configuration here

      // Fetch projects to populate the dropdown
      this.projetService.getAllProjets().subscribe(data => {
        this.projects = data;
      });

      // Initialize the chart with default values
      this.updateChart();
    });
  }

  onProjectSelect(projectId: number) {
    this.selectedProjectId = projectId;
    this.updateChart();
  }

  updateChart() {
    if (this.selectedProjectId) {
      this.tacheService.getRolesCountByProject(this.selectedProjectId).subscribe(data => {
        const roleCounts = this.indicators.map(indicator => data[indicator.name] || 0);

        this.options = {
          backgroundColor: this.echarts.bg,
          color: [this.colors.primaryLight],
          tooltip: {},
          legend: {
            data: ['Role Count'],
            textStyle: {
              color: this.echarts.textColor,
            },
          },
          radar: {
            name: {
              textStyle: {
                color: this.echarts.textColor,
              },
            },
            indicator: this.indicators,
            splitArea: {
              areaStyle: {
                color: 'transparent',
              },
            },
          },
          series: [
            {
              name: 'Role Count',
              type: 'radar',
              data: [
                {
                  value: roleCounts,
                  name: 'Role Count',
                },
              ],
            },
          ],
        };
      });
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
