
type helpCommand = {
    helpCmd:{cmd:string}[];
}


export const help:helpCommand = {
    helpCmd:[
    {
        cmd:"neofetch"
    },
    {
        cmd:"ls"
    },
    {
        cmd:"socials"
    }
]
}
                                                                                  

export let asciiArt = `
                   -                    pumpum@devProd 
                  .o+                    -------------- 
                 \`ooo/                   OS: Arch Linux x86_64 
                \`+oooo:                  Host: 82K2 IdeaPad Gaming 3 15ACH6 
               \`+oooooo:                 Kernel: 6.14.2-arch1-1 
               -+oooooo+:                Uptime: 11 days, 14 hours, 40 mins 
             \`/:-:++oooo+:               Packages: 1474 (pacman) 
            \`/++++/+++++++:              Shell: zsh 5.9 
           \`/++++++++++++++:             Resolution: 1920x1080 
          \`/+++ooooooooooooo/\`           DE: Plasma 6.3.5 
         ./ooosssso++osssssso+\`          WM: kwin 
        .oossssso-\`\`\`\`/ossssss+\`         Theme: Breeze-Dark [GTK2], Breeze [GTK3] 
       -osssssso.      :ssssssso.        Icons: candy-icons [GTK2/3] 
      :osssssss/        osssso+++.       Terminal: konsole 
     /ossssssss/        +ssssooo/-       CPU: AMD Ryzen 7 5800H with Radeon Graphics (16) @ 4.465GHz 
   \`/ossssso+/:-        -:/+osssso+-     GPU: AMD ATI Radeon Vega Series / Radeon Vega Mobile Series 
  \`+sso+:-\`                 \`.-/+oso:    GPU: NVIDIA GeForce RTX 3050 Mobile 
 \`++:.                           \`-/+/   Memory: 5557MiB / 13820MiB 
 .\`                                 \`/
`;

console.log(asciiArt);

export function neofetch(cmd?:string):string{

    return asciiArt
}