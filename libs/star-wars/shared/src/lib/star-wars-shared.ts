import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  exports: [CustomMaterialModule, FormsModule, ReactiveFormsModule]
})
export class StarWarsSharedModule {}
