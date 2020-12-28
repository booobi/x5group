import { NgModule } from "@angular/core";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureHomeComponent } from "./feature-home.component";

@NgModule({
    imports: [FontAwesomeModule],
    declarations: [FeatureHomeComponent],
    exports: [FeatureHomeComponent, FontAwesomeModule],
})
export class FeatureHomeModule {}