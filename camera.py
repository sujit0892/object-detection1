import cv2
import numpy as np
class VideoCamera(object):
    def __init__(self):

        self.video = cv2.VideoCapture(0)
        self.CLASSES = ["background", "aeroplane", "bicycle", "bird", "boat",
	"bottle", "bus", "car", "cat", "chair", "cow", "diningtable",
	"dog", "horse", "motorbike", "person", "pottedplant", "sheep",
	"sofa", "train", "tvmonitor"]
        self.COLORS = np.random.uniform(0, 255, size=(len(self.CLASSES), 3))
        print("[INFO] loading model...")
        self.net = cv2.dnn.readNetFromCaffe("MobileNetSSD_deploy.prototxt.txt",
                               "MobileNetSSD_deploy.caffemodel")


    
    def __del__(self):
        self.video.release()
    
    def get_frame(self):
        success, image = self.video.read()
        (h, w) = image.shape[:2]
        blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 0.007843, (300, 300), 127.5)
        self.net.setInput(blob)
        detections = self.net.forward()

        for i in np.arange(0, detections.shape[2]):
                confidence = detections[0, 0, i, 2]
                if confidence > 0.2:
		
                        idx = int(detections[0, 0, i, 1])
                        box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
                        (startX, startY, endX, endY) = box.astype("int")

                        label = "{}: {:.2f}%".format(self.CLASSES[idx], confidence * 100)
                        cv2.rectangle(image, (startX, startY), (endX, endY),
				self.COLORS[idx], 2)
                        y = startY - 15 if startY - 15 > 15 else startY + 15
                        cv2.putText(image, label, (startX, y),
				cv2.FONT_HERSHEY_SIMPLEX, 0.5, self.COLORS[idx], 2)

        scale_percent = 68 # percent of original size
        width = int(image.shape[1])
        height = int(image.shape[0] * scale_percent / 100)
        dim = (width, height)

        resized = cv2.resize(image, dim, interpolation = cv2.INTER_AREA) 

        ret, jpeg = cv2.imencode('.jpg', resized)
        return jpeg.tobytes()
