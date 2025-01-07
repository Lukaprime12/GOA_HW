import pygame
import random

# Initialize Pygame
pygame.init()

# Constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
BLOCK_SIZE = 40
BLOCK_COLOR = (0, 128, 0)
BACKGROUND_COLOR = (135, 206, 235)

# Screen setup
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Minecraft in Python')

# Clock for controlling frame rate
clock = pygame.time.Clock()

# Game variables
blocks = []

# Block class to manage block positions
class Block:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.color = BLOCK_COLOR

    def draw(self, screen):
        pygame.draw.rect(screen, self.color, (self.x, self.y, BLOCK_SIZE, BLOCK_SIZE))

# Function to generate random blocks
def generate_blocks():
    for i in range(0, SCREEN_WIDTH, BLOCK_SIZE):
        for j in range(SCREEN_HEIGHT // 2, SCREEN_HEIGHT, BLOCK_SIZE):  # Ground-level
            if random.random() < 0.5:  # 50% chance to create a block
                blocks.append(Block(i, j))

# Main game loop
generate_blocks()
running = True
while running:
    screen.fill(BACKGROUND_COLOR)

    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if event.button == 1:  # Left click to place block
                mouse_x, mouse_y = pygame.mouse.get_pos()
                mouse_x = (mouse_x // BLOCK_SIZE) * BLOCK_SIZE
                mouse_y = (mouse_y // BLOCK_SIZE) * BLOCK_SIZE
                blocks.append(Block(mouse_x, mouse_y))
            elif event.button == 3:  # Right click to remove block
                mouse_x, mouse_y = pygame.mouse.get_pos()
                mouse_x = (mouse_x // BLOCK_SIZE) * BLOCK_SIZE
                mouse_y = (mouse_y // BLOCK_SIZE) * BLOCK_SIZE
                blocks = [block for block in blocks if block.x != mouse_x or block.y != mouse_y]

    # Draw all blocks
    for block in blocks:
        block.draw(screen)

    # Update display
    pygame.display.update()

    # Frame rate
    clock.tick(30)

# Quit Pygame
pygame.quit()