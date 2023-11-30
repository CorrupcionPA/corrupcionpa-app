import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzMessageService } from 'ng-zorro-antd/message'
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NzListModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public msg: NzMessageService) {}

  data = [
    'Presidentes',
    'Diputados',
    'Ministros',
    'Alcaldes',
    'Representantes',
    'Partidos politicos',
  ]
}
