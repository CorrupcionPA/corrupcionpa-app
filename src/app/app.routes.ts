import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ViewPresidentComponent } from './components/view-president/view-president.component'
import { ChoosePresidentComponent } from './components/choose-president/choose-president.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'choose-president',
    component: ChoosePresidentComponent,
    data: { breadcrumb: 'Choose President' },
  },
  {
    path: 'president/:id',
    component: ViewPresidentComponent,
    data: { breadcrumb: ':id' },
  },
]
