import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async completeMacth() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันผลการแข่งขัน',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['../../competition-list']);
          }
        }
      ]
    });
    await alert.present();
  }

  backCompetition(): void {
		this.modalController.dismiss().then().catch();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
