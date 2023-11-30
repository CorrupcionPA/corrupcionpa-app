import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ChoosePresidentComponent } from './components/choose-president/choose-president.component'
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'choose-president', component: ChoosePresidentComponent },
]
