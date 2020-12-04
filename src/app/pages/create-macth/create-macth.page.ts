import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePage } from './create/create.page';

@Component({
  selector: 'app-create-macth',
  templateUrl: './create-macth.page.html',
  styleUrls: ['./create-macth.page.scss'],
})
export class CreateMacthPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
        component: CreatePage
    });
    return await modal.present();
  }

}
