
# Gas Molecule Simulation
This project is a simple simulation of gas molecules in motion. It uses JavaScript and the HTML5 canvas to create a dynamic, interactive representation of gas molecules bouncing around in a container.

## Features

- **Dynamic Canvas**: The canvas automatically adjusts to the size of the window, providing a responsive experience.
- **Randomized Molecules**: Each molecule (represented as a circle) has randomized properties including position, speed, direction, and color.
- **Collision Detection**: The simulation includes collision detection, both with the walls of the container and between molecules.
- **Animation**: The molecules are animated and continuously move around the canvas, bouncing off the walls and each other.

## How It Works

The simulation creates a number of `Circle` objects, each representing a gas molecule. Each `Circle` has properties for its position, radius, color, and velocity. The `Circle` objects are stored in an array, and an animation function updates the position of each circle on every frame, creating the illusion of motion. When a circle hits the edge of the canvas or another circle, it bounces back in the opposite direction.

## Usage

To run the simulation, simply open the HTML file in your browser. You should see a number of colored circles moving around the screen, representing the gas molecules.
