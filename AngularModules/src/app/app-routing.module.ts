import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomPreloadStrategyService } from './services/custom-preload-strategy.service';

const routes: Routes = [{
  path: 'domain', loadChildren: (async () => (await import('./modules/domain/domain.module')).DomainModule), data: { preload: true, preloadDelay: 4000 }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
