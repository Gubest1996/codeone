import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createMacth = {
    palyer1: '',
    player2: '',
    field: '',
    date: undefined,
    time: undefined
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async createMacthAlert() {
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
            this.createForm();
            this.backAddMacth();
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * createForm
   */
  createForm() {
    console.log(this.createMacth);
  }

  /**
	 * Back Page Buttom
	 */
  backAddMacth(): void {
		this.modalController.dismiss().then().catch();
  }
  
}
