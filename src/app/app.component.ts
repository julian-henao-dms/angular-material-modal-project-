import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/shared/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  example = 'Modal';
  img = '../assets/images/logodmscolor.svg';

  constructor(public dialog: MatDialog){}

  openDialog(){
   let dialogRef = this.dialog.open(ModalComponent, {
     data:{
       id: 1,
       titulo: 'Modal DMS',
       contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula enim id elit dictum suscipit. Sed sed tortor eu nulla aliquet pellentesque. Sed sed tincidunt lectus, quis interdum lacus. Aliquam a justo felis. Nulla odio felis, consequat in tempus vel, malesuada a tortor. Donec nulla eros, fermentum eget magna in, condimentum condimentum quam. Nullam hendrerit neque et tortor aliquam, id interdum risus convallis. Curabitur quis mattis velit. Cras blandit justo vitae libero laoreet dignissim. Morbi hendrerit nec quam vel ultricies.'
      }
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Acción Modal: ${result}`);
   });
  }
}
