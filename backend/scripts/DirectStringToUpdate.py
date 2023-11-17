if __name__ == "__main__":
	data = """"""

	split_data = data.split(sep='\n')
	for image in split_data:
		tuple_data = image.split('=', maxsplit=1)
		print(f"UPDATE TierList_Items SET imageUrl = \"{tuple_data[1]}\" WHERE tierListId = 1 AND name = \"{tuple_data[0]}\";")

