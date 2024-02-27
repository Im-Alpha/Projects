import os 
import shutil
import time
import re

EXCLUDE_FILE = 'LNFolders.py'

def create_dir(path, volume):
    if not os.path.exists(volume):
            os.mkdir(volume)


def move_files(target_path, file, volume):
    shutil.move(file, volume) # (src, dst)


# def main():
#     while True:
#         # Get current directory and set it as the target path
#         cwd = os.getcwd()
#         target_path = os.path.join(cwd)

#         # Set up the number of files originally for automation
#         number_of_files = len(os.listdir(cwd))
#         time.sleep(20)
#         old_number = number_of_files
#         number_of_files = len(os.listdir(cwd))

#         # If new files detected, organize them
#         if number_of_files != old_number:
#             # Get all file volensions present in the directory
#             volensions = {item.split('.')[-1] for item in os.listdir(target_path) 
#             if os.path.isfile(os.path.join(target_path, item))}
#             # print(volensions)

#             # Create a folder for volension types
#             create_dir(target_path, volensions)

#             # Move the files into the folder
#             move_files(target_path)

def main():
    # Get current directory and set it as the target path
    cwd = os.getcwd()
    target_path = os.path.join(cwd)

    # Get all file volumes present in the directory
    # volumes = {item.split('.')[-1] for item in os.listdir(target_path) 
    # if os.path.isfile(os.path.join(target_path, item))}
    # print(volensions)

    # Test string 
    # test_string = "MKnR 01    -(t)- Enrollment (I).epub"
    # Strip until title and volume number are separate
    for item in os.listdir(target_path):
        if item != EXCLUDE_FILE:
            volume_number = re.sub(r'\D', '', item)
            volume_title = re.sub(r'\d', '', item)
            volume_title = volume_title.split(')-')
            volume_title = volume_title[1].split('.')
            volume_title = volume_title[0]
            # print(volume_number)
            # print(volume_title)
            volume = 'Volume ' + volume_number + volume_title
            print(volume)
            # if os.path.isfile(os.path.join(target_path, item))
        


    # Create a folder for volumes
            create_dir(target_path, volume)

    # Move the files into the folder
            move_files(target_path, item, volume)

main()