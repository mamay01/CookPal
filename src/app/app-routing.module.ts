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
  {
    path: 'tinolaingred',
    loadChildren: () => import('./tinolaingred/tinolaingred.module').then( m => m.TinolaingredPageModule)
  },
  {
    path: 'tinolainst',
    loadChildren: () => import('./tinolainst/tinolainst.module').then( m => m.TinolainstPageModule)
  },
  {
    path: 'laing',
    loadChildren: () => import('./laing/laing.module').then( m => m.LaingPageModule)
  },
  {
    path: 'laingingred',
    loadChildren: () => import('./laingingred/laingingred.module').then( m => m.LaingingredPageModule)
  },
  {
    path: 'lainginst',
    loadChildren: () => import('./lainginst/lainginst.module').then( m => m.LainginstPageModule)
  },
  {
    path: 'chickenadobo',
    loadChildren: () => import('./chickenadobo/chickenadobo.module').then( m => m.ChickenadoboPageModule)
  },
  {
    path: 'chickenadingred',
    loadChildren: () => import('./chickenadingred/chickenadingred.module').then( m => m.ChickenadingredPageModule)
  },
  {
    path: 'chickenadinst',
    loadChildren: () => import('./chickenadinst/chickenadinst.module').then( m => m.ChickenadinstPageModule)
  },
  {
    path: 'embutido',
    loadChildren: () => import('./embutido/embutido.module').then( m => m.EmbutidoPageModule)
  },
  {
    path: 'embutidoingred',
    loadChildren: () => import('./embutidoingred/embutidoingred.module').then( m => m.EmbutidoingredPageModule)
  },
  {
    path: 'embutidoinst',
    loadChildren: () => import('./embutidoinst/embutidoinst.module').then( m => m.EmbutidoinstPageModule)
  },
  {
    path: 'karekare',
    loadChildren: () => import('./karekare/karekare.module').then( m => m.KarekarePageModule)
  },
  {
    path: 'karekareingred',
    loadChildren: () => import('./karekareingred/karekareingred.module').then( m => m.KarekareingredPageModule)
  },
  {
    path: 'karekareinst',
    loadChildren: () => import('./karekareinst/karekareinst.module').then( m => m.KarekareinstPageModule)
  },
  {
    path: 'bicolexpress',
    loadChildren: () => import('./bicolexpress/bicolexpress.module').then( m => m.BicolexpressPageModule)
  },
  {
    path: 'bicolexpressingred',
    loadChildren: () => import('./bicolexpressingred/bicolexpressingred.module').then( m => m.BicolexpressingredPageModule)
  },
  {
    path: 'bicolexpressinst',
    loadChildren: () => import('./bicolexpressinst/bicolexpressinst.module').then( m => m.BicolexpressinstPageModule)
  },
  {
    path: 'sopas',
    loadChildren: () => import('./sopas/sopas.module').then( m => m.SopasPageModule)
  },
  {
    path: 'sopasingred',
    loadChildren: () => import('./sopasingred/sopasingred.module').then( m => m.SopasingredPageModule)
  },
  {
    path: 'sopasinst',
    loadChildren: () => import('./sopasinst/sopasinst.module').then( m => m.SopasinstPageModule)
  },
  {
    path: 'shanghai',
    loadChildren: () => import('./shanghai/shanghai.module').then( m => m.ShanghaiPageModule)
  },
  {
    path: 'shanghaiingred',
    loadChildren: () => import('./shanghaiingred/shanghaiingred.module').then( m => m.ShanghaiingredPageModule)
  },
  {
    path: 'shanghaiinst',
    loadChildren: () => import('./shanghaiinst/shanghaiinst.module').then( m => m.ShanghaiinstPageModule)
  },
  {
    path: 'relyentuna',
    loadChildren: () => import('./relyentuna/relyentuna.module').then( m => m.RelyentunaPageModule)
  },
  {
    path: 'relyentunaingred',
    loadChildren: () => import('./relyentunaingred/relyentunaingred.module').then( m => m.RelyentunaingredPageModule)
  },
  {
    path: 'relyentunainst',
    loadChildren: () => import('./relyentunainst/relyentunainst.module').then( m => m.RelyentunainstPageModule)
  },
  {
    path: 'porkmonggocrispgalungong',
    loadChildren: () => import('./porkmonggocrispgalungong/porkmonggocrispgalungong.module').then( m => m.PorkmonggocrispgalungongPageModule)
  },
  {
    path: 'porkmonggocrispgalungongingred',
    loadChildren: () => import('./porkmonggocrispgalungongingred/porkmonggocrispgalungongingred.module').then( m => m.PorkmonggocrispgalungongingredPageModule)
  },
  {
    path: 'porkmonggocrispgalungonginst',
    loadChildren: () => import('./porkmonggocrispgalungonginst/porkmonggocrispgalungonginst.module').then( m => m.PorkmonggocrispgalungonginstPageModule)
  },  {
    path: 'kinamatisangmanok',
    loadChildren: () => import('./kinamatisangmanok/kinamatisangmanok.module').then( m => m.KinamatisangmanokPageModule)
  },
  {
    path: 'kinamatisangmanokingred',
    loadChildren: () => import('./kinamatisangmanokingred/kinamatisangmanokingred.module').then( m => m.KinamatisangmanokingredPageModule)
  },
  {
    path: 'kinamatisangmanokinst',
    loadChildren: () => import('./kinamatisangmanokinst/kinamatisangmanokinst.module').then( m => m.KinamatisangmanokinstPageModule)
  },
  {
    path: 'pancit',
    loadChildren: () => import('./pancit/pancit.module').then( m => m.PancitPageModule)
  },
  {
    path: 'pancitingred',
    loadChildren: () => import('./pancitingred/pancitingred.module').then( m => m.PancitingredPageModule)
  },
  {
    path: 'pancitinst',
    loadChildren: () => import('./pancitinst/pancitinst.module').then( m => m.PancitinstPageModule)
  },
  {
    path: 'bistek',
    loadChildren: () => import('./bistek/bistek.module').then( m => m.BistekPageModule)
  },
  {
    path: 'bistekingred',
    loadChildren: () => import('./bistekingred/bistekingred.module').then( m => m.BistekingredPageModule)
  },
  {
    path: 'bistekinst',
    loadChildren: () => import('./bistekinst/bistekinst.module').then( m => m.BistekinstPageModule)
  },
  {
    path: 'sisig',
    loadChildren: () => import('./sisig/sisig.module').then( m => m.SisigPageModule)
  },
  {
    path: 'sisigingred',
    loadChildren: () => import('./sisigingred/sisigingred.module').then( m => m.SisigingredPageModule)
  },
  {
    path: 'sisiginst',
    loadChildren: () => import('./sisiginst/sisiginst.module').then( m => m.SisiginstPageModule)
  },
  {
    path: 'chickcurry',
    loadChildren: () => import('./chickcurry/chickcurry.module').then( m => m.ChickcurryPageModule)
  },
  {
    path: 'chickcurryingred',
    loadChildren: () => import('./chickcurryingred/chickcurryingred.module').then( m => m.ChickcurryingredPageModule)
  },
  {
    path: 'chickcurryinst',
    loadChildren: () => import('./chickcurryinst/chickcurryinst.module').then( m => m.ChickcurryinstPageModule)
  },
  {
    path: 'afritada',
    loadChildren: () => import('./afritada/afritada.module').then( m => m.AfritadaPageModule)
  },
  {
    path: 'afritadaingred',
    loadChildren: () => import('./afritadaingred/afritadaingred.module').then( m => m.AfritadaingredPageModule)
  },
  {
    path: 'afritadainst',
    loadChildren: () => import('./afritadainst/afritadainst.module').then( m => m.AfritadainstPageModule)
  },
  {
    path: 'dishes',
    loadChildren: () => import('./dishes/dishes.module').then( m => m.DishesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
