# Map Pin Tool

## Description
The Map Pin Tool is an interactive web application that allows users to drop pins on a map, add remarks, and automatically fetch the address for each pin location. Users can view all saved pins in a sidebar and easily navigate between them.

## Features
- Interactive map interface
- Pin dropping functionality
- Automatic address fetching for each pin
- Ability to add remarks to each pin
- Sidebar display of all saved pins
- Local storage persistence of pins across sessions
- Responsive design for desktop and mobile devices

## Technologies Used
- React
- Leaflet (react-leaflet)
- OpenStreetMap
- OpenStreetMap Nominatim API for reverse geocoding

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Jash2606/Map-Pin-Tool.git
   ```

2. Navigate to the project directory:
   ```
   cd Map-Pin-Tool
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. Click anywhere on the map to drop a pin.
2. A popup will appear, allowing you to enter remarks for the pin.
3. Click the "Save Pin" button to save the pin with its remarks and fetched address.
4. View all saved pins in the sidebar on the right.
5. Click on any pin in the sidebar to center the map on that location.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
