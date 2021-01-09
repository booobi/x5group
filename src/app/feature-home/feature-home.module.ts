import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureHomeComponent } from "./feature-home.component";

@NgModule({
    imports: [FontAwesomeModule, MatButtonModule],
    declarations: [FeatureHomeComponent],
    exports: [FeatureHomeComponent, FontAwesomeModule],
})
export class FeatureHomeModule {}