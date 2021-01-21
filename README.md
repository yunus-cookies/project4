# Code challenge - Yunus

First of, thank you for the opportunity. I learned alot during the process of developing this.
Here is a <a href='https://gfycat.com/ifr/HauntingLeadingDairycow'>preview of the app</a>.

## Pre-read - Challenges before solving problem

I probably went through every error known to man trying to get your repo running. After an embarrassing long time of trying to fiddle with it, I decided to revert
your repo back to expo (before eject), and run it so. Now I could begin :)<br></br>
I added "resolveJsonModule": true to the tsconfig.json file to be able to resolve json as a module in typescript.

## Prerequisites

- The Project is bootstrapped with [The Official Guide](https://reactnative.dev/docs/typescript) please refer to that id you have any issues.
- NodeJs installed
- Android and/or iOS environment (refer to [the docs](https://reactnative.dev/docs/environment-setup) if needed)
- Expo

## Setup

- It should work out of the box `npm install -g expo-cli` (if you don't have it already)
- `npm install`
- `npm start`
- `Open android studio or whatever, and press run in browser.`

## Initial challenges

I needed to create a model for the dummyData. For this I used http://json2ts.com/ and also added my IApplication at the end to use throughout the application.
For the design I simply used nativebase, as I didn't want to spend much time on worrying about CSS. I did however add some custom CSS using both stylesheet and styled-components. Why styled-components? I was used to the design structure, and I guess I wanted the option of being able to use it.<br></br>
Having to utilize typescript and constantly worry about types, and not just simply write whatever, was a little challenging at first, but as I got used to the process and flow of typescript, it did become easier and alot more interesting.

## Pages/routes

I did have some trouble configuring the routes for the different components, because of typescript. In the end, since I focused on just solving the tasks, I decided to go with one page, and render changes depending on states. Sort of a pseduo solution, but it did the job fine.

## Accordion

Along the way, I discovered that nativebase accordion did not work. No matter what I did. So I had to build my own accordion component, but being the lazy person I am, I found this: https://medium.com/@KPS250/creating-an-accordion-in-react-native-f313748b7b46. Worked like a charm.

## dummyData
- I altered the dummy data a bit. You may notice a file_url2. I couldn't make the images on my restaurant component work locally, so I decided to add their url source link.
- I noticed that the question "Which langues do you speak?" only ever had one lanugage, but did allow multiple answers. So I added multiple languages for one of the profiles, just to mimic what it might look like.
- I noticed that for the profile images, you used a url source. This page seems to show a new picture on every load. Fine I thought, but for some reason the image wouldn't change for every profile. But since this is fake data, I assumed that it shouldn't matter in this case, and that in a real scenario, each profile would have its own unique source.

## Swipes

I tried to make the swipes look more engaging and smooth, but I didn't want to spend much time on it, so I decided to just make the swiping work.

## Indicator

For the indication, if whether the user has viewed the application or not, I used a state of list of objects which object input: "Status: id", to track it, and
a function "seenApplication" to update it.

### Added/modified files and folders

- components/Accordion/index.tsx
- components/Applications/index.tsx
- components/Profile/index.tsx
- components/Profile/ProfileData.tsx
- components/Profile/ProfileElements.tsx
- components/Restaurants/index.tsx
- dummyData/applications.json
- models/application.ts
- App.tsx
- tsconfig.json
- assets/images/Slurp.png
- assets/images/McDonalds.png
- assets/images/Noma.png

# Conclusion

Overall, I thank you for the opportuniy. It was a fun little interesting task to spend my time solving. I got alot more comfortable with typescript and react-native.<br></br>
My biggest challenge was ironically not solving the task, but setup of the application. Typescript did bother me at first, but grew on me at the end.

