import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ gallery }) => {
	return (
	
		<ul>
			{gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
				<li key={id}>
					<ImageGalleryItem
						webformatURL={webformatURL}
						largeImageURL={largeImageURL}
						tags={tags} />
				</li>
			))}
		</ul>
	);
};