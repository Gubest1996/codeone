import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {

  constructor( 
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async onCompetitionJoin() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันข้อมูล',
      message: 'แบดมินตันชาย 18 ปี',
      buttons: [
        {
          text: 'แก้ไข',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
          }
        }
      ]
    });

    await alert.present();
  }

  dimissModal(): void {
    this.modalController.dismiss().then().catch();
  }

}
