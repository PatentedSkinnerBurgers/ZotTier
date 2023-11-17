import csv

def DoCSV():
	with open("ZotTier.csv", "r") as f:
		reader = csv.reader(f, delimiter=",")
		for line in enumerate(reader):
			for obj in line[1][1:]:
				if obj is None or obj == "":
					continue
				print(f"INSERT INTO TierList_Items (tierListId, name) VALUES ({line[1][0]}, \"{obj}\");")


if __name__ == "__main__":
	DoCSV()

