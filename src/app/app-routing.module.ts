import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'landingpage',
    loadChildren: () => import('./landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: 'binagoonganrecipe',
    loadChildren: () => import('./binagoonganrecipe/binagoonganrecipe.module').then( m => m.BinagoonganrecipePageModule)
  },
  {
    path: 'binagoonganingred',
    loadChildren: () => import('./binagoonganingred/binagoonganingred.module').then( m => m.BinagoonganingredPageModule)
  },
  {
    path: 'binagoonganinst',
    loadChildren: () => import('./binagoonganinst/binagoonganinst.module').then( m => m.BinagoonganinstPageModule)
  },
  {
    path: 'pepperpork',
    loadChildren: () => import('./pepperpork/pepperpork.module').then( m => m.PepperporkPageModule)
  },
  {
    path: 'pepperporkingred',
    loadChildren: () => import('./pepperporkingred/pepperporkingred.module').then( m => m.PepperporkingredPageModule)
  },
  {
    path: 'pepperporkinst',
    loadChildren: () => import('./pepperporkinst/pepperporkinst.module').then( m => m.PepperporkinstPageModule)
  },
  {
    path: 'bangussinigang',
    loadChildren: () => import('./bangussinigang/bangussinigang.module').then( m => m.BangussinigangPageModule)
  },
  {
    path: 'bangusingred',
    loadChildren: () => import('./bangusingred/bangusingred.module').then( m => m.BangusingredPageModule)
  },
  {
    path: 'bangusinst',
    loadChildren: () => import('./bangusinst/bangusinst.module').then( m => m.BangusinstPageModule)
  },
  {
    path: 'porkmenudo',
    loadChildren: () => import('./porkmenudo/porkmenudo.module').then( m => m.PorkmenudoPageModule)
  },
  {
    path: 'porkmenudoingred',
    loadChildren: () => import('./porkmenudoingred/porkmenudoingred.module').then( m => m.PorkmenudoingredPageModule)
  },
  {
    path: 'porkmenudoinst',
    loadChildren: () => import('./porkmenudoinst/porkmenudoinst.module').then( m => m.PorkmenudoinstPageModule)
  },
  {
    path: 'tinola',
    loadChildren: () => import('./tinola/tinola.module').then( m => m.TinolaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
