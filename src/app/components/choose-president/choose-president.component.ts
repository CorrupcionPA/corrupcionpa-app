import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
@Component({
  selector: 'app-choose-president',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzListModule,
  ],
  templateUrl: './choose-president.component.html',
  styleUrl: './choose-president.component.scss',
})
export class ChoosePresidentComponent {
  onBack(): void {
    console.log('onBack')
  }
  presidents = [
    { name: 'Laurentino Cortizo', start: 2019, ending: 2024 },
    { name: 'Juan Varela', start: 2014, ending: 2019 },
    { name: 'Ricardo Martinelli', start: 2009, ending: 2014 },
  ]
}
