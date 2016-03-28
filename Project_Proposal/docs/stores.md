# Flux Stores

### PropertyStore

Holds all persisted property data.

##### Actions:
- `receiveAllProperties`
- `receiveSingleProperty`
- `removeProperty`

##### Listeners:
- `PropertyIndex` (passes to `PropertyIndexItem` via props)
- `PropertyDetail`

### PropertyFormStore

Holds un-persisted property data to send to the API.

##### Actions:
- `receivePropertyFormParams`

##### Listeners:
- `PropertyForm`


### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
