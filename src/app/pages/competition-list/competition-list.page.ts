import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CompetitionPage } from "./competition/competition.page";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.page.html',
  styleUrls: ['./competition-list.page.scss'],
})
export class CompetitionListPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }


  ngOnInit() {
  }

  async onCompetitionJoin() {
    const modal = await this.modalController.create({
      component: CompetitionPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
