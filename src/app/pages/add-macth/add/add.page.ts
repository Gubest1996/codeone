import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController, ModalController } from '@ionic/angular';

import { AddMacth } from './../../../core/add-macth/_models/add-macth.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  addMacthModel: AddMacth;

  addMacth: FormGroup;

  typeMacth:string = 'แบดมินตันชาย 18 ปี';

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async addMacthAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันข้อมูล',
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
            this.createForm();
            this.backAddMacth();
          }
        }
      ]
    });
    await alert.present();
  }

  /**
	 * Create form
	 */
  createForm() {
    this.addMacth = this.formBuilder.group({
      competition: [this.addMacthModel.competition],
      body: [this.addMacthModel.body],
      dateClose: [this.addMacthModel.dateClose],
      statusOfColse: [this.addMacthModel.statusOfColse],
    });
    console.log(this.addMacth);
  }

  onSubmit() {
    this.addMacth = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });
    console.log("Hellow");
  }

  /**
	 * Back Buttom
	 */
  backAddMacth(): void {
		this.modalController.dismiss().then().catch();
  }
  
}
