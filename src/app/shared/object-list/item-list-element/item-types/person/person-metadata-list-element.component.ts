import { rendersItemType } from '../../../../items/item-type-decorator';
import { VIEW_MODE_ELEMENT } from '../../../../../+item-page/simple/related-items/related-items-component';
import { Component } from '@angular/core';
import { TypedItemSearchResultListElementComponent } from '../typed-item-search-result-list-element.component';
import { MetadataRepresentationType } from '../../../../../core/shared/metadata-representation/metadata-representation.model';

@rendersItemType('Person', VIEW_MODE_ELEMENT, MetadataRepresentationType.Item)
@Component({
  selector: 'ds-person-metadata-list-element',
  templateUrl: './person-metadata-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Person
 */
export class PersonMetadataListElementComponent extends TypedItemSearchResultListElementComponent {
}
