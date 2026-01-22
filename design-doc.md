# Create Prepare to Dye 2 - Design Document

## 1. Vision
- Hook: Build intricate automation lines to satisfy company contracts and expand your empire.
- Pitch: Create-focused automation economy where buildable systems and trade drive progression, products are complex trade goods, devices and tools needed to make them stay cheap.
- Pillars:
    - Buildables-first progression (farms, logistics, infrastructure)
    - Commerce-driven goals (company trades and reputation)
    - Automation puzzles over crafting trees
    - Expansion through land/infrastructure unlocks and company relationships
- Success and failure:
    - Success: Successfully completing contracts, earning reputation, delivering products and expanding land
    - Failure: Infra failures, conditional contract failures, betrayals, etc. Because of the nature of continues trades like for land expansions, small infra falures can cascade

## 2. Core Loop
- Step 1: communicate with companies and get trades
- Step 2: build infra to fulfill trades
- Step 3: deliver products, earn reputation/currency
- Step 4: expand land and infra, expand relationships

## 2.1 cadence
- Outside the into, want the loop to repeat every max 20 minutes. I want each loop iteration to not jump too far from the last one and the expected current player infra. eg: first loop ask player for white powder, then ask player for sand which requires white powder etc.
- Most (around 70%) loop cycles should provide the player with fixed rates trades

## 3. Systems
### System: Company Contracts
- Inputs: product deliveries, reputation thresholds
- Outputs: currency, unlocks, expansion permits, products, ingredients
- Rules: contracts scale with tier; time limits optional
- Edge Cases: failed delivery penalties; contract cancellation, betrayals, competing interests

### System: Buildables Infrastructure
- Inputs: cheap devices, power, logistics, space
- Outputs: automated product chains
- Rules: devices cheap; products complex; trade terminals require specific space between eachother

### System: Dyanmic markets
- todo

### System: Inter-world multiplayer batch trading 
- todo

### System: Area expansion
- Inputs: relationship development, currency, products
- Outputs: more land, allowing for more mesh terminalsd
- Rules: Equation based prices to insure proper scaling rules. Need to account for past trades throughput (currency/time)
- Edge Cases: Aside from story based expansion, at some point unlock infinite procedural expansion 

### System: Advancements
- Inputs: contract completions, reputation milestones, actions in world, throughput goals
- Outputs: advancements, shows next advancements
- Rules: used as reward in reward deadzones, used as information delivery system.
- Edge Cases: make sure not to overwhelm player with too many advancements at once. 

## 4. Progression
- Infrastructure: more products and ingredients automated, more trades automated
- Resources: currency, reputation, land/permits, power capacity
- Upgrades: company relationships, automaton upgrades (elytra?)

## 5. Content
- Story: company trades, relationships, interactions, agreements, betrayals, initiatives etc.
- Automation puzzles: intersting product chains that are not just ratio matching, but require some creative buildable solutions
- Advancements: simple concise advancement tree to guide player along company interactions and automation goals

## 6. Specialized UX
- HUD: chat interface with companies, advancement tracker

## 7. Narrative
- Setting: industrial frontier with competing companies, cooperatives, governments, armies, interesting individuals, allknowing artificial intelligence, etc.
- Role: up and coming capitalist company
- Tone: Satirical and darkly comic, exaggerated stereotypes, often morally gray, casual and humorous.
- Opening premise: Player lands on planet with a contract to a small bit of land and slowly develops their company by trading with other companies and expanding their land and influence.


## 8. Scope
- Playtime: shot-ish for a modpack in terms of story. I want to aim towards 10 to 20 hours
- Endgame: 
    - procdural trades with dyanmic markets and infinite land expansion
    - multiplayer batch trading between players in different worlds/servers

## 9. Moments
- The moment the player understands they can do alot more than they could in minecraft
- The moment the player understands that their milk source has fixed throughput
- 
---
## Appendix: Design Rationale and definitions
In minecraft, to achieve a goal, there are a few elements you can produce.
- Craftables
    - Ingredients
    - Devices
    - Products
        - Tools
        - Food
        - Decorative
- Buildables / farms
    - Crop farms
    - Animal farms
    - Mob farms
    - Tree farms
    - Ore farms
    - Mana farms
    - Power farms

Usually modded minecraft complicates the craftables part with slight complication to the buildables part, depending on the mod. For example, thermal expansions adds a lot of complicated and interesting craftable recipes, but to connect the machines is trivial, the cables/logistics are easy, energy is easy, just need to connect the dots. It's still fun, I love TE a lot, but we are noting that the emphasis is on the craftables. Compare that the a mod like botania, where the buildables are complicated. The mana generation is complicated, the automation is complicated, the logistics is complicated. Or compare it to create, which takes the concept of buildables to the next level, in create, the buildables are very complicated, and so fun and interesting, in create, unlike in botania, the craftables are generally simple.

My core concept here, is to take make the buildables a big focus, and reduce the craftables to a minimum. Some sub categories of the craftables are: ingredients, devices, products. To make buildables more complicated while reducing the craftables, I need the devices to be easy to build. I want products to still be complicated, otherwise I don't need the buildables. For that, I believe I need to split ingredients to product ingredients and device ingredients, that way I can make sure the player can interact and engage with the buildables gameplay loop as fast as possible, and I make sure that the buildables are necessary and complex by making those buildables produce intricate Ingredients and products.

Example:
lets take a tree farm with botania for example.
- The buildables are the tree farm itself, the mana generation, the mana storage, the mana distribution.
- The craftables here are an issue, because to make the tree farm, you'll need some mana generating flowers, some functional flowers etc. Each costing runes and such, which are hard to get, let alone automate. All of that is fine, again, but not a part of the game play loop we are trying to go for so, if we go in with a first principles approach, that means that flowers, of any kind, should not cost runes. I know, this is blasphemy, but this is what we have to do if we want to focus on the buildables. 
### Craftables
#### Products 
Products are gonna be the main thing sold and traded. Those can and should be complex. Those are the goals, the advanced things you automate in most of the gameplay loop of the game. 
- food
- industrial parts (stuff the player *does not use* for their own crafting)
- tools
- armor
- books
#### Devices
Things like functional flowers, create devicds, etc. Those should be cheap, but with limited usefulness 
#### Product ingredients
Those can have the widest array of complexity and can sometimes be the same ones in device ingredients 
#### Device ingredients 
Because devices are cheap. Those should either be cheap, or completely removed when possible to make possible the ideal 


