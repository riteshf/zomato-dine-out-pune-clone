# Task

- Create a Similar page to [Zomato Pune Dineout](https://www.zomato.com/pune/dine-out)

# Getting Started

1. Clone/Fork this repository [https://github.com/riteshf/zomato-dine-out-pune-clone.git](https://github.com/riteshf/zomato-dine-out-pune-clone.git)
2. navigate to the folder `cd zomato-dine-out-pune-clone`
3. npm install
4. npm start

## Understanding Component Structure

- [App](./src/App.js)
  - [Navbar](./src/components/Navbar/Navbar.jsx)
    - [ComboSearch](./src/components/Navbar/ComboSearch/ComboSearch.jsx)
      - [Location](./src/components/Navbar/ComboSearch/Location/Location.jsx)
      - [Search](./src/components/Navbar/ComboSearch/Search/Search.jsx)
    - [Breadcrums](./src/components/Navbar/Breadcrums/Breadcrums.jsx)
      - [Breadcrum](./src/components/Navbar/Breadcrums/Breadcrum/Breadcrum.jsx)
  - [Options](./src/components/Options/Options.jsx)
    - [Tabs](./src/components/Options/Tabs/Tabs.jsx)
      - [Tab](./src/components/Options/Tabs/Tab/Tab.jsx)
    - [TabOptions](./src/components/Options/TabOptions/TabOptions.jsx)
      - [TabOption](./src/components/Options/TabOptions/TabOption/TabOption.jsx)
  - [Restaurants](./src/components/Restuarants/Restaurants.jsx)
    - [Filters](./src/components/Restuarants/Filters/Filters.jsx)
      - [FilterButton](./src/components/Restuarants/Filters/FilterButton/FilterButton.jsx)
    - [Restaurant](./src/components/Restuarants/Restuarant/Restaurant.jsx)

**Note** - `Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks`

## Understanding Data Structure

- [options.json](./src/data/options.json)
  - information of tab options and options to show when one tab option is selected.
- [restaurants.json](./src/data/restaurants.json)
  - inforamation on all the restaurants in system

**Note** - `Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks`

## Features to build

1. Make sure `Location` Dropdown works and give you the same option
2. `Search` should filter the restuarant by `restaurant.name`, case insensentive search.
3. User should be able to select only one `Tabs` from `Options`.
4. `Filters` and `FilterButton` should be able to filter data with `Search` Feature.
5. `FilterButton` should filter as follows.
   - rating 4+ : Shows only restuarant with rating above 4.
   - open now : shows restuarant that are open now.
   - outdoor seating: shows restaurants that has outdoor seating.
   - searves alcohol - shows restaurant that serves alcohol.
6. We should be able to Select multiple `FilterButton`.
7. By clicking on same `FilterButton` twice should de-select that FilterButton.

**Note** - `Make sure you implelement features one by one and deploy the app correctly`
