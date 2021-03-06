import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {

  joinMacth = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }

  constructor(
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
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
    console.log(this.joinMacth);
  }

  backAddMacth(): void {
		this.modalController.dismiss().then().catch();
  }
}
