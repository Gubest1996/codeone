import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MacthPage } from './macth.page';

describe('MacthPage', () => {
  let component: MacthPage;
  let fixture: ComponentFixture<MacthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MacthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
