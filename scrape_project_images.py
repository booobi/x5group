# fb image links token expires, so store images on FE
# WAIT - its done rarely enough to afford it
# query API, get FB image links, download and store locally in FE assets
import requests, json, os, time
url = 'https://twvnmtyq1g.execute-api.eu-west-1.amazonaws.com/dev/projects'

projects = requests.get(url).json()['items']

def downloadImage(imageUrl, fullDownloadPath):
    while True:
            try:
                print('trying to download image ' + str(imageUrl))
                image = requests.get(imageUrl)
                file = open(fullDownloadPath, "wb")
                file.write(image.content)
                file.close()
            except:
                print('conn refused, retrying...')
                continue
            break

for item in projects:
    print('processing ' + item['projectId'])
    assetProjectFolder = "./src/assets/images/" + item['projectId'];

    if not os.path.exists(assetProjectFolder):
        os.makedirs(assetProjectFolder)

    # download thumbnail
    thumbnailUrl = item['thumbnailUrl']
    downloadImage(thumbnailUrl, assetProjectFolder + "/" + "thumbnail.jpg")

    # download all gallery images
    galleryImageUrls = item['galleryImageUrls']
    for imageIndex in range(len(galleryImageUrls)):
        print(imageIndex)
        imageUrl = galleryImageUrls[imageIndex]


        downloadImage(imageUrl, assetProjectFolder + "/" + str(imageIndex) + ".jpg")