import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ViewPresidentComponent } from './components/view-president/view-president.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'president/:id',
    component: ViewPresidentComponent,
    data: { breadcrumb: ':id' },
  },
]
