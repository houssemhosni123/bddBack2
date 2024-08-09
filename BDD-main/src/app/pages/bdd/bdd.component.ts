import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HowService } from '../../Services/HowService';
import { WhyService } from '../../Services/WhyService';
import { LimitationService } from '../../Services/LimitationService';
import { AvantageService } from '../../Services/AvantageService';
import { How } from '../../Models/How';
import { Why } from '../../Models/Why';
import { Limitation } from '../../Models/Limitation';
import { Avantage } from '../../Models/Avantage';

@Component({
  selector: 'ngx-bdd',
  templateUrl: './bdd.component.html',
  styleUrls: ['./bdd.component.scss']
})
export class BDDComponent implements OnInit {
  howadd: How = { text: '' };
  hows: How[] = [];

  whyadd: Why = { text: '' };
  whys: Why[] = [];

  limitationadd: Limitation = { text: '' };
  limitations: Limitation[] = [];

  avantageadd: Avantage = { text: '' };
  avantages: Avantage[] = [];

  showWhyForm: boolean = false; // Property to control form visibility

  constructor(
    private howService: HowService,
    private whyService: WhyService,
    private limitationService: LimitationService,
    private avantageService: AvantageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllHows();
    this.getAllAvantages();
    this.getAllWhys();
    this.getAllLimitations();
  }

  toggleWhyForm() {
    this.showWhyForm = !this.showWhyForm;
  }

  getAllHows() {
    this.howService.getAllHows().subscribe((res) => {
      this.hows = res;
    });
  }

  onSubmit() {
    this.howService.createHow(this.howadd).subscribe(
      (data) => {
        this.hows.push(data);
        this.howadd.text = ''; // Reset the input field
      },
      (error) => console.log(error)
    );
  }

  deleteSHow(id: string) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.howService.deleteHow(id).subscribe((data) => {
        this.hows = this.hows.filter(h => h.id !== id);
      });
    }
  }
  

  getAllWhys() {
    this.whyService.getAllWhys().subscribe((res) => {
      this.whys = res;
    });
  }

  onSubmitWhy() {
    this.whyService.createWhy(this.whyadd).subscribe(
      (data) => {
        this.whys.push(data);
        this.whyadd.text = ''; // Reset the input field
        this.showWhyForm = false; // Hide the form after successful submission
      },
      (error) => console.log(error)
    );
  }

  deleteSWhy(id: string) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.whyService.deleteWhy(id).subscribe((data) => {
        this.whys = this.whys.filter(w => w.id !== id);
      });
    }
  }
  

  getAllLimitations() {
    this.limitationService.getAllLimitations().subscribe((res) => {
      this.limitations = res;
    });
  }

  onSubmitLimitation() {
    this.limitationService.createLimitation(this.limitationadd).subscribe(
      (data) => {
        this.limitations.push(data);
        this.limitationadd.text = ''; // Reset the input field
      },
      (error) => console.log(error)
    );
  }

  deleteSLimitation(id: string) {
    if (confirm("Are you sure you want to delete this Limitation?")) {
      this.limitationService.deleteLimitation(id).subscribe((data) => {
        this.limitations = this.limitations.filter(l => l.id !== id);
      });
    }
  }
  

  getAllAvantages() {
    this.avantageService.getAllAvantages().subscribe((res) => {
      this.avantages = res;
    });
  }

  onSubmitAvantage() {
    this.avantageService.createAvantage(this.avantageadd).subscribe(
      (data) => {
        this.avantages.push(data);
        this.avantageadd.text = ''; // Reset the input field
      },
      (error) => console.log(error)
    );
  }

  deleteSAvantage(id: string) {
    if (confirm("Are you sure you want to delete this Avantage?")) {
      this.avantageService.deleteAvantage(id).subscribe((data) => {
        this.avantages = this.avantages.filter(a => a.id !== id);
      });
    }
  }
  
}
