import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

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

  scoreManagement() {
    this.router.navigate(['competition-list/score']);
  }
}
