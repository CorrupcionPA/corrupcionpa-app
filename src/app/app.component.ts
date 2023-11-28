import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterModule } from '@angular/router'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'corrupcion'
}
