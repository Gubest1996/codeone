import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { CompetitionPage } from "./competition/competition.page";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.page.html',
  styleUrls: ['./competition-list.page.scss'],
})
export class CompetitionListPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
  ) { }


  ngOnInit() {
  }

  otCompetition() {
    // const modal = await this.modalController.create({
    //   component: CompetitionPage,
    //   cssClass: 'my-custom-class'
    // });
    // return await modal.present();

    this.router.navigate(['competition-list/competition']);
  }
}
