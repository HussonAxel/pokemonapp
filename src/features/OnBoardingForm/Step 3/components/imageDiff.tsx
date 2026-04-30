import {
    ImageComparison,
    ImageComparisonImage,
    ImageComparisonSlider
} from "@/components/ui/image-comparison";

export default function ImageComparisonBasic() {
    return (
        <ImageComparison className="aspect-16/9 w-full rounded-lg border border-input" enableHover>
            <ImageComparisonImage
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                alt="Motion Primitives Dark"
                className="object-contain"
                position="left"
            />
            <ImageComparisonImage
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
                alt="Motion Primitives Light"
                className="object-contain"
                position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-black/30 backdrop-blur-xs">
                <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </ImageComparisonSlider>
        </ImageComparison>
    );
}
