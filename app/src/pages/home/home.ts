import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController) {}
              items = ['Html5', 'CSS3', 'JS']
              presentActionSheet() {
                const actionSheet = this.actionSheetCtrl.create({
                  title: 'Modify your album',
                  buttons: [
                    {
                      icon: 'ios-trash-outline',
                      text: 'Destructive',
                      role: 'destructive',
                      handler: () => {
                        console.log('Destructive clicked');
                      }
                    },{
                      icon: 'ios-archive-outline',
                      text: 'Archive',
                      handler: () => {
                        console.log('Archive clicked');
                      }
                    },{
                      icon: 'ios-close-outline',
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        console.log('Cancel clicked');
                      }
                    }
                  ]
                });
                actionSheet.present();
  }

}
