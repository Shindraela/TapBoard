import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatProgressBarModule,
	MatRippleModule
} from '@angular/material';
@NgModule({
	imports: [
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressBarModule,
		MatRippleModule
	],
	exports: [
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressBarModule,
		MatRippleModule
	]
})
export class MaterialModule {}
