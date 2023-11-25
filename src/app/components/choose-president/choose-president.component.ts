import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
@Component({
  selector: 'app-choose-president',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzGridModule],
  templateUrl: './choose-president.component.html',
  styleUrl: './choose-president.component.scss',
})
export class ChoosePresidentComponent {}
