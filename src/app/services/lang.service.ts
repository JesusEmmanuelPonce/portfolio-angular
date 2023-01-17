import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  langs: string[] = [];

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(["en", "es"]);
    this.langs = this.translate.getLangs();
    translate.get(this.langs).subscribe(res => {
      console.log(res)
    });

    console.log(this.translate)
  }
}
