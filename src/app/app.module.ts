import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvraAnimalsComponent } from './avra-animals/avra-animals.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';
import { WidCardComponent } from './comps/cards/wid-card/wid-card.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { BeastsPanelComponent } from './comps/panels/beasts-panel/beasts-panel.component';
import { BirdsPanelComponent } from './comps/panels/birds-panel/birds-panel.component';
import { WildsPanelComponent } from './comps/panels/wilds-panel/wilds-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AvraAnimalsComponent,
    BeastCardComponent,
    BirdCardComponent,
    WidCardComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PaginatorComponent,
    BeastsPanelComponent,
    BirdsPanelComponent,
    WildsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
