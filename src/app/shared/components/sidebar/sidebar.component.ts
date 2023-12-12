import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  //standalone: true,
  /*imports: [
    CommonModule,
  ],*/
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor( private  gitsService: GifsService){}

  get tags(): string[]{
    //console.log(this.gitsService.tagsHistory);
    return this.gitsService.tagsHistory;
  }

  searchTag(tag: string):void{
    this.gitsService.searchTag(tag);
  }

}
