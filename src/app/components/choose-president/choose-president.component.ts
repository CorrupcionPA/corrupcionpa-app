import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { Politico } from '../../types/Politico'
import { Router } from '@angular/router'
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
  presidents: Politico[] = [
    {
      id: '1',
      idPartido: '1',
      nombre: 'Laurentino Cortizo',
      inicioPeriodo: new Date('2019-01-01'),
      finPeriodo: new Date('2024-01-01'),
    },
    {
      id: '2',
      idPartido: '2',
      nombre: 'Juan Varela',
      inicioPeriodo: new Date('2014-01-01'),
      finPeriodo: new Date('2019-01-01'),
    },
    {
      id: '3',
      idPartido: '3',
      nombre: 'Ricardo Martinelli',
      inicioPeriodo: new Date('2009-01-01'),
      finPeriodo: new Date('2014-01-01'),
    },
  ]
  constructor(private router: Router) {}
  onBack(): void {
    this.router.navigate(['/home'])
  }
}
