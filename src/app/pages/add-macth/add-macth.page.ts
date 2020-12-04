import { PopoverComponent } from './../../components/popover/popover.component';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController} from '@ionic/angular';

import { AddPage } from './add/add.page';

@Component({
  selector: 'app-add-macth',
  templateUrl: './add-macth.page.html',
  styleUrls: ['./add-macth.page.scss'],
})
export class AddMacthPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  joinMacth() {
    this.router.navigate(['add-macth/add']);
  }

  addMacth() {
    this.router.navigate(['add-macth/add']);
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //       component: AddPage
  //   });
  //   return await modal.present();
  // }

}
