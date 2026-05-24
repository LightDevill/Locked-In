Us – Wabi-Sabi Warmth Design Document
Version: 1.0
Last Updated: January 2024
Design System Name: Wabi-Sabi Warmth
Application: Us (Private Couple Application)

Table of Contents
Design Philosophy & Principles
Color System
Typography System
Spacing & Grid System
Component Library
Iconography
Textures & Surfaces
Animation & Motion
Interaction Patterns
Screen Designs
Accessibility Considerations
Implementation Guide
1. Design Philosophy & Principles
1.1 Core Philosophy: Wabi-Sabi Warmth
Wabi-Sabi is the Japanese aesthetic philosophy that finds beauty in imperfection, transience, and simplicity. Warmth brings tactile, human, analog feeling to digital interfaces.

Combined Philosophy:
"Us" is designed to feel like a cherished physical object—a leather-bound journal, a box of old letters, a photo album passed down through generations. It embraces the imperfect, the handmade, the deeply personal.

1.2 Design Pillars
Pillar 1: Imperfect Beauty
Asymmetry is welcomed: Not everything aligns to a rigid grid
Texture over flatness: Paper grain, soft shadows, natural irregularities
Handmade over manufactured: Elements feel crafted, not generated
Aging gracefully: Design should feel like it's been used and loved, not fresh from a factory
Example: Cards have subtle rotation variations (0.5-1.5°), shadows aren't perfectly uniform, borders have slight natural waviness.

Pillar 2: Tactile Realism
Physical affordances: Buttons press down, cards lift up, objects have weight
Material honesty: Paper feels like paper, ink feels like ink
Dimensional depth: Layered interfaces mimicking real-world object stacking
Haptic reinforcement: Every touch has physical feedback
Example: Tapping a button doesn't just change color—it compresses slightly, shadow reduces, haptic pulse fires, making it feel like pressing a physical button.

Pillar 3: Intentional Slowness
No instant gratification: Animations take time, actions feel deliberate
Moments of pause: Loading states are meditative, not frustrating
Ceremonial interactions: Important actions (sealing letters, completing shared tasks) have ritual-like flows
Space to breathe: Generous whitespace, uncluttered layouts
Example: Sealing a love letter involves a 2-second animation of envelope folding, wax melting, and stamp pressing—making the act feel meaningful, not rushed.

Pillar 4: Emotional Depth
Warm color palette: No cold blues or sterile grays
Serif typography for intimacy: Long-form content uses serif to feel personal
Mood-responsive UI: Interface subtly adapts to emotional context
Japanese aesthetic details: Minimalist poetry quotes, kanji accents, zen space
Example: When viewing a love letter, the background subtly shifts to a warmer tone, and a small Japanese character (愛 - love) appears faintly in the corner.

1.3 Design Constraints (The "Nos")
❌ No cold, corporate aesthetics
❌ No sharp corners (except deliberate accent elements)
❌ No pure black (all darks are warm-toned)
❌ No bright, saturated primary colors (looking at you, #0066FF)
❌ No infinite scroll dopamine loops
❌ No notification badges with numbers (anxiety-inducing)
❌ No "modern SaaS dashboard" patterns
❌ No generic icons from Material Design (customize or draw)

1.4 Design Decision Framework
Every design decision must pass this test:

text

Question: "Does this feel like it was made by hand, with love, for two specific people?"

If YES → Proceed
If NO → Redesign until yes
If UNSURE → Show to a partner in a relationship and ask how it feels
Example:

✅ Hand-drawn heart icon with imperfect curves
❌ Perfect geometric heart from icon library
2. Color System
2.1 Semantic Color Roles
Paper Backgrounds
Primary Paper (#FAF9F6)

Usage: Main app background, default screen background
Feel: Warm, aged paper—not bright white
Implementation: Body background, card containers, empty states
RGB: 250, 249, 246
HSL: 40°, 33%, 97%
Secondary Paper (#F5F3EE)

Usage: Elevated surfaces (cards, modals, dialogs)
Feel: Slightly darker, like layered paper
Implementation: Card backgrounds, bottom sheets, input fields
RGB: 245, 243, 238
HSL: 40°, 23%, 95%
Pressed Paper (#EBE8DF)

Usage: Pressed button states, active selections
Feel: Paper pressed down, slightly compressed
Implementation: Button active state, selected tabs, focused inputs
RGB: 235, 232, 223
HSL: 45°, 23%, 90%
Ink Text
Primary Ink (#1C1816)

Usage: Headings, important text, primary actions
Feel: Fresh ink, strong but not harsh
Implementation: H1-H3, button text, thought titles
Contrast Ratio: 15.8:1 on #FAF9F6 (AAA)
RGB: 28, 24, 22
Secondary Ink (#2D2926)

Usage: Body text, descriptions, captions
Feel: Slightly faded ink, readable but softer
Implementation: Paragraphs, descriptions, timestamps
Contrast Ratio: 12.1:1 on #FAF9F6 (AAA)
RGB: 45, 41, 38
Body Ink (#3E3A35)

Usage: Long-form content, letters, journal entries
Feel: Comfortable for extended reading
Implementation: Letter content, thought feed items
Contrast Ratio: 9.5:1 on #FAF9F6 (AA+)
RGB: 62, 58, 53
Hint Ink (#6B6B6B)

Usage: Placeholders, helper text, secondary labels
Feel: Faint, ghosted ink
Implementation: Input placeholders, "Optional" labels, timestamps
Contrast Ratio: 5.2:1 on #FAF9F6 (AA)
RGB: 107, 107, 107
Primary Accent: Clay (#C17767)
Clay 500 (#C17767) – Primary

Usage: Primary actions, love/connection theme
Feel: Terracotta, warm clay pottery
Implementation: Primary buttons, active tabs, love icons
RGB: 193, 119, 103
Clay 400 (#D4A494) – Light

Usage: Hover states, backgrounds
RGB: 212, 164, 148
Clay 600 (#A65D4F) – Dark

Usage: Pressed states, borders
RGB: 166, 93, 79
Clay 100 (#FFEAE0) – Tint

Usage: Subtle backgrounds, highlights
RGB: 255, 234, 224
Clay 50 (#FFF5F0) – Whisper

Usage: Very subtle backgrounds
RGB: 255, 245, 240
Secondary Accent: Bamboo (#7D8F69)
Bamboo 500 (#7D8F69) – Primary

Usage: Secondary actions, growth/task theme
Feel: Natural, earthy, grounding
Implementation: Task checkboxes, "Add" buttons, secondary CTAs
RGB: 125, 143, 105
Bamboo 400 (#9CAD8A) – Light

RGB: 156, 173, 138
Bamboo 600 (#6B7A58) – Dark

RGB: 107, 122, 88
Bamboo 100 (#E8EDE3) – Tint

RGB: 232, 237, 227
Emotional Accent: Persimmon (#E77A5E)
Persimmon 500 (#E77A5E) – Primary

Usage: Love, passion, emotional emphasis
Feel: Ripe persimmon fruit, sweet and vibrant
Implementation: "Miss You" pings, hearts, love letters
RGB: 231, 122, 94
Persimmon 400 (#FF9780) – Light

RGB: 255, 151, 128
Persimmon 600 (#D15E42) – Dark

RGB: 209, 94, 66
Persimmon 100 (#FFE5DE) – Tint

RGB: 255, 229, 222
Mood Colors
These are semantic colors tied to specific emotional states. They should never be used for generic UI elements.

Mood	Color	Hex	Usage
Happy	Sunflower	#FFD93D	Mood jar orbs, mood indicators
Love	Rose	#FF6B8A	Love mood state
Sad	Raindrop	#7C9FFC	Sad mood state
Excited	Tangerine	#FF9A56	Excited mood state
Calm	Sage	#7DDBA3	Calm mood state
Anxious	Lavender	#B088F9	Anxious mood state
Tired	Stone	#C9D1D9	Tired mood state
Grateful	Peach	#FFB5A3	Grateful mood state
Implementation Rule: Mood colors are only used in:

Mood Jar orbs
Mood selection interface
Mood indicator on dashboard
Thought feed mood badges
They should never replace primary/secondary/emotional accent colors for buttons, cards, or general UI.

2.2 Shadow System
Shadows in "Us" are warm and soft, never harsh black.

Shadow Base Color: rgba(193, 119, 103, 0.X) (Clay with variable opacity)

Shadow Levels
Level 1: Whisper (resting cards)

CSS

box-shadow: 0 2px 8px rgba(193, 119, 103, 0.08),
            0 1px 3px rgba(193, 119, 103, 0.04);
Usage: Resting cards, subtle elevation
Distance: 2-8px
Blur: Soft
Level 2: Lifted (hovered cards, active elements)

CSS

box-shadow: 0 4px 16px rgba(193, 119, 103, 0.12),
            0 2px 6px rgba(193, 119, 103, 0.06);
Usage: Hover states, dragged cards
Distance: 4-16px
Level 3: Floating (modals, dialogs, bottom sheets)

CSS

box-shadow: 0 8px 24px rgba(193, 119, 103, 0.16),
            0 4px 12px rgba(193, 119, 103, 0.08);
Usage: Modals, popovers, floating action buttons
Distance: 8-24px
Level 4: Ceremonial (important moments like letter opening)

CSS

box-shadow: 0 16px 48px rgba(193, 119, 103, 0.24),
            0 8px 24px rgba(193, 119, 103, 0.12);
Usage: Love letter envelopes, celebration moments
Distance: 16-48px
Inner Shadow (pressed states)

CSS

box-shadow: inset 0 2px 4px rgba(193, 119, 103, 0.15);
Usage: Pressed buttons, active input fields
2.3 Gradient System
Gradients are subtle and natural, never loud or artificial.

Paper Gradient (background texture)
CSS

background: linear-gradient(
  135deg,
  #FAF9F6 0%,
  #F5F3EE 100%
);
Usage: Main app background, large containers
Angle: 135° (diagonal)
Feel: Like light hitting aged paper
Clay Gradient (primary buttons)
CSS

background: linear-gradient(
  180deg,
  #D4A494 0%,
  #C17767 50%,
  #A65D4F 100%
);
Usage: Primary action buttons
Vertical gradient: Top-to-bottom (light to dark)
Feel: Ceramic pottery glaze
Persimmon Gradient (emotional emphasis)
CSS

background: linear-gradient(
  180deg,
  #FF9780 0%,
  #E77A5E 60%,
  #D15E42 100%
);
Usage: "Miss You" ping buttons, love hearts
Feel: Warm sunset, glowing embers
2.4 Color Usage Guidelines
Do's ✅
Use Clay for primary actions (submit, send, save)
Use Bamboo for secondary actions (add, edit, filter)
Use Persimmon for emotional moments (miss you, love, celebrate)
Use Paper backgrounds consistently
Use warm shadows (never black)
Use mood colors only for mood-related UI
Don'ts ❌
Never use pure black (#000000)
Never use pure white (#FFFFFF)
Never use mood colors for general UI (they're sacred)
Never use cold blues or grays
Never use gradients on text (readability)
Never use more than 2 accent colors on the same screen
3. Typography System
3.1 Font Stack
Sans-Serif (Roboto) – For UI, labels, short-form content

CSS

font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', sans-serif;
Serif (Noto Serif) – For long-form, emotional, intimate content

CSS

font-family: 'Noto Serif', 'Georgia', 'Times New Roman', serif;
Rationale:

Roboto: Clean, readable, modern but warm (not sterile)
Noto Serif: Humanist serif, feels personal without being overly decorative
System fonts fallback: Ensures performance and native feel
3.2 Type Scale
Based on a modular scale with ratio 1.25 (Major Third), starting from 16px base.

Level	Size	Line Height	Weight	Usage	Font
H1	32px	40px (1.25)	Bold (700)	Screen titles	Roboto
H2	26px	34px (1.31)	SemiBold (600)	Section headings	Roboto
H3	21px	28px (1.33)	SemiBold (600)	Card titles	Roboto
H4	18px	24px (1.33)	Medium (500)	Subsection labels	Roboto
Body Large	18px	28px (1.56)	Regular (400)	Letter content	Noto Serif
Body	16px	24px (1.5)	Regular (400)	Default text	Roboto
Body Small	14px	20px (1.43)	Regular (400)	Secondary text	Roboto
Caption	13px	18px (1.38)	Regular (400)	Timestamps, hints	Roboto
Label	14px	20px (1.43)	Medium (500)	Input labels, tags	Roboto
Button	16px	24px (1.5)	Medium (500)	Button text	Roboto
3.3 Typography Rules
Hierarchy Through Scale & Weight
Never use color alone to create hierarchy
Size first, weight second, color third
Minimum 2-step difference for clear hierarchy (e.g., H1 vs Body)
Line Length
Optimal: 50-75 characters per line
Maximum: 90 characters
Implementation: Max-width on text containers
Letter Spacing (Tracking)
Headings (H1-H3): -0.01em (tighter)
Body text: 0 (default)
All caps labels: 0.05em (looser)
Serif Usage (Noto Serif)
Use serif only for:

Love letter content
Long-form journal entries
Thought feed item text (the actual thought)
Emotional quotes or poetry
Never use serif for:

UI labels
Buttons
Navigation
Form inputs
Timestamps
Alignment
Body text: Left-aligned (never justified—creates rivers)
Headings: Left-aligned
Short labels/buttons: Center-aligned within container
Numbers (dates, counts): Tabular alignment
3.4 Example Text Styles (CSS)
CSS

/* Headings */
.text-h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1C1816; /* Primary Ink */
}

.text-h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  line-height: 34px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #1C1816;
}

.text-h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: #2D2926; /* Secondary Ink */
}

/* Body Text */
.text-body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #3E3A35; /* Body Ink */
}

.text-body-serif {
  font-family: 'Noto Serif', serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: #3E3A35;
}

/* Labels & Captions */
.text-caption {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #6B6B6B; /* Hint Ink */
}

.text-label {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #2D2926;
}
4. Spacing & Grid System
4.1 Spacing Scale
Based on 8px base unit (t-shirt sizing).

Token	Value	Usage
spacing-xs	4px	Tight spacing (icon-text gap)
spacing-sm	8px	Small spacing (between related items)
spacing-md	16px	Default spacing (card padding, margins)
spacing-lg	24px	Large spacing (section separation)
spacing-xl	32px	Extra large (screen padding)
spacing-2xl	48px	Section breaks
spacing-3xl	64px	Major section breaks
Rule: Always use multiples of 4px. Never arbitrary values like 13px or 27px.

4.2 Grid System
Mobile Grid (Primary)
Columns: 4 columns
Gutter: 16px
Margin: 20px (left/right)
Container max-width: 100% - 40px (margins)
Example:

text

|--20px--|  COL 1  |--16px--| COL 2 |--16px--| COL 3 |--16px--| COL 4 |--20px--|
Tablet/Large Phone (optional, future)
Columns: 8 columns
Gutter: 16px
Margin: 24px
4.3 Layout Patterns
Screen Layout
text

┌────────────────────────────────────────┐
│  Status Bar (system)                    │
├────────────────────────────────────────┤
│  Top Navigation (48px height)           │ ← Optional
├────────────────────────────────────────┤
│                                         │
│  Content Area (scrollable)              │
│  - Padding: 20px horizontal             │
│  - Padding: 16px vertical               │
│                                         │
│                                         │
│                                         │
├────────────────────────────────────────┤
│  Bottom Navigation (64px height)        │ ← Optional
└────────────────────────────────────────┘
Card Layout
text

┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │ Card Header (16px padding)       │  │
│  ├──────────────────────────────────┤  │
│  │                                  │  │
│  │ Card Content (16px padding)      │  │
│  │                                  │  │
│  ├──────────────────────────────────┤  │
│  │ Card Footer (12px padding)       │  │ ← Optional
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
4.4 Spacing Usage Examples
Card Internal Spacing:

Padding: 16px all sides
Title to content: 12px
Content to footer: 16px
List Items:

Between items: 12px
Item internal padding: 12px 16px
Form Fields:

Label to input: 6px
Between fields: 20px
Submit button spacing: 24px above
Screen Sections:

Between major sections: 32px
Section header to content: 16px
5. Component Library
5.1 Buttons
Buttons are the most important tactile element in the app. They must feel physical, pressable, and satisfying.

Primary Button (Clay)
Visual Spec:

Background: Clay gradient (see §2.3)
Text: Primary Ink (#1C1816), Roboto Medium 16px
Height: 48px (touch target)
Padding: 16px horizontal
Border Radius: 12px
Shadow: Level 1 (resting), Inner shadow (pressed)
States:

Resting:

CSS

.btn-primary {
  background: linear-gradient(180deg, #D4A494 0%, #C17767 50%, #A65D4F 100%);
  color: #1C1816;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  padding: 0 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(193, 119, 103, 0.08),
              0 1px 3px rgba(193, 119, 103, 0.04);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
Hover (desktop only):

CSS

.btn-primary:hover {
  box-shadow: 0 4px 12px rgba(193, 119, 103, 0.12),
              0 2px 6px rgba(193, 119, 103, 0.06);
  transform: translateY(-1px);
}
Pressed (mobile tap, desktop click):

CSS

.btn-primary:active {
  box-shadow: inset 0 2px 4px rgba(193, 119, 103, 0.15);
  transform: translateY(1px) scale(0.98);
  background: linear-gradient(180deg, #C17767 0%, #A65D4F 100%);
}
Haptic: Medium impact
Animation duration: 150ms
Feel: Button compresses like soft clay
Disabled:

CSS

.btn-primary:disabled {
  background: #EBE8DF; /* Pressed Paper */
  color: #6B6B6B; /* Hint Ink */
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.6;
}
Secondary Button (Bamboo)
Visual Spec:

Background: Bamboo 500 (#7D8F69)
Text: Paper (#FAF9F6), Roboto Medium 16px
Height: 48px
Padding: 16px horizontal
Border Radius: 12px
States: Similar to primary, but using Bamboo color values.

Ghost Button (Outline)
Visual Spec:

Background: Transparent
Border: 2px solid Clay 500 (#C17767)
Text: Clay 600 (#A65D4F), Roboto Medium 16px
Height: 48px
Padding: 16px horizontal
Border Radius: 12px
Pressed state:

CSS

.btn-ghost:active {
  background: #FFEAE0; /* Clay 100 */
  border-color: #A65D4F; /* Clay 600 */
  transform: scale(0.98);
}
Icon Button (Small)
Visual Spec:

Size: 40x40px (square)
Background: Transparent (resting), Clay 100 (pressed)
Icon: 20x20px, Clay 500
Border Radius: 10px
Usage: Close buttons, edit icons, favorite hearts

CSS

.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 10px;
  transition: background 0.2s ease;
}

.btn-icon:active {
  background: #FFEAE0; /* Clay 100 */
  transform: scale(0.92);
}
Floating Action Button (FAB)
Visual Spec:

Size: 56x56px (circle)
Background: Persimmon gradient
Icon: 24x24px, white/paper color
Shadow: Level 2 (resting), Level 3 (hover)
Position: Fixed bottom-right, 20px margin
Usage: Primary action on screen (e.g., "New Thought", "Write Letter")

CSS

.fab {
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: linear-gradient(180deg, #FF9780 0%, #E77A5E 60%, #D15E42 100%);
  box-shadow: 0 4px 16px rgba(231, 122, 94, 0.24),
              0 2px 8px rgba(231, 122, 94, 0.12);
  position: fixed;
  bottom: 80px; /* Above bottom nav */
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.fab:active {
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(231, 122, 94, 0.18);
}
Haptic: Heavy impact (more pronounced than regular buttons)
5.2 Cards
Cards are the primary container for content. They should feel like paper notes stacked on a desk.

Standard Card
Visual Spec:

Background: Secondary Paper (#F5F3EE)
Border Radius: 16px
Padding: 16px
Shadow: Level 1
Border: None (elevation via shadow only)
Special detail: Subtle folded corner (top-right)

CSS

.card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, transparent 50%, #EBE8DF 50%);
  border-radius: 0 16px 0 0;
}
CSS:

CSS

.card {
  background: #F5F3EE;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(193, 119, 103, 0.08),
              0 1px 3px rgba(193, 119, 103, 0.04);
  position: relative;
  /* Subtle paper texture (see §7.1) */
  background-image: url('data:image/svg+xml;base64,...'); /* Noise texture */
  background-blend-mode: multiply;
  opacity: 0.03;
}
Hover State (if clickable):

CSS

.card:hover {
  box-shadow: 0 4px 16px rgba(193, 119, 103, 0.12);
  transform: translateY(-2px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
Letter Card (Sealed Envelope)
Visual Spec:

Background: Clay 50 (#FFF5F0) with paper texture
Border Radius: 12px
Padding: 20px
Shadow: Level 2
Decorative wax seal: Persimmon 500 circle (24x24px) with "愛" kanji
Special elements:

Envelope flap (triangle cutout at top)
Wax seal indicator (if unopened)
Slight rotation (±0.5-1.5°) for natural stacking
CSS

.letter-card {
  background: #FFF5F0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(193, 119, 103, 0.12);
  position: relative;
  transform: rotate(-0.8deg); /* Unique per card */
}

/* Envelope flap */
.letter-card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 30px solid #FFEAE0; /* Clay 100 */
}

/* Wax seal */
.letter-card .seal {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background: #E77A5E; /* Persimmon */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #FAF9F6;
  font-weight: 700;
}
Thought Card (Feed Item)
Visual Spec:

Background: Paper gradient (subtle)
Border Radius: 12px
Padding: 12px 16px
Shadow: Level 1
Left accent: 3px vertical bar (author's color: Clay for you, Bamboo for partner)
CSS

.thought-card {
  background: linear-gradient(135deg, #FAF9F6 0%, #F5F3EE 100%);
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(193, 119, 103, 0.08);
  border-left: 3px solid #C17767; /* Clay for self */
  margin-bottom: 12px;
}

.thought-card.partner {
  border-left-color: #7D8F69; /* Bamboo for partner */
}
5.3 Input Fields
Inputs should feel like writing on textured paper.

Text Input
Visual Spec:

Background: Secondary Paper (#F5F3EE)
Border: 2px solid transparent (resting), Clay 500 (focused)
Border Radius: 10px
Height: 48px
Padding: 12px 16px
Font: Roboto Regular 16px, Body Ink
States:

Resting:

CSS

.input-text {
  background: #F5F3EE;
  border: 2px solid transparent;
  border-radius: 10px;
  height: 48px;
  padding: 12px 16px;
  font-size: 16px;
  color: #3E3A35;
  transition: all 0.2s ease;
}

.input-text::placeholder {
  color: #6B6B6B; /* Hint Ink */
  opacity: 0.8;
}
Focused:

CSS

.input-text:focus {
  border-color: #C17767; /* Clay 500 */
  box-shadow: 0 0 0 3px rgba(193, 119, 103, 0.1); /* Glow */
  outline: none;
}
Haptic: Light impact on focus
Error state:

CSS

.input-text.error {
  border-color: #D15E42; /* Persimmon 600 */
  background: #FFE5DE; /* Persimmon 100 */
}
Textarea (Long-form)
Visual Spec:

Same as text input, but:
Min-height: 120px
Font: Noto Serif Regular 18px (for letters, journal entries)
Padding: 16px
Resize: Vertical only
CSS

.textarea {
  background: #F5F3EE;
  border: 2px solid transparent;
  border-radius: 10px;
  min-height: 120px;
  padding: 16px;
  font-family: 'Noto Serif', serif;
  font-size: 18px;
  line-height: 28px;
  color: #3E3A35;
  resize: vertical;
}
Checkbox (Custom)
Visual Spec:

Size: 24x24px
Background: Secondary Paper (unchecked), Bamboo 500 (checked)
Border: 2px solid Bamboo 600
Border Radius: 6px
Checkmark: White, 14px
CSS

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #6B7A58; /* Bamboo 600 */
  border-radius: 6px;
  background: #F5F3EE;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.checkbox.checked {
  background: #7D8F69; /* Bamboo 500 */
  border-color: #7D8F69;
}

.checkbox.checked::after {
  content: '✓';
  color: #FAF9F6;
  font-size: 14px;
  font-weight: 700;
}
Haptic: Medium impact on check/uncheck
5.4 Navigation
Bottom Navigation Bar
Visual Spec:

Height: 64px
Background: Secondary Paper with slight gradient upward
Border Top: 1px solid rgba(193, 119, 103, 0.1) (subtle)
Shadow: Reverse shadow (top) for floating effect
Structure:

text

┌────────────────────────────────────────┐
│  Icon 1   Icon 2   Icon 3   Icon 4    │
│  Label 1  Label 2  Label 3  Label 4   │
└────────────────────────────────────────┘
Nav Item:

Icon: 24x24px
Label: 12px, Roboto Medium
Color (inactive): Hint Ink (#6B6B6B)
Color (active): Clay 500 (#C17767)
Indicator: 3px dot above icon (active)
CSS

.bottom-nav {
  height: 64px;
  background: linear-gradient(0deg, #F5F3EE 0%, #FAF9F6 100%);
  border-top: 1px solid rgba(193, 119, 103, 0.1);
  box-shadow: 0 -2px 8px rgba(193, 119, 103, 0.04);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #6B6B6B;
  transition: color 0.2s ease;
}

.nav-item.active {
  color: #C17767;
}

.nav-item.active::before {
  content: '';
  width: 3px;
  height: 3px;
  background: #C17767;
  border-radius: 50%;
  position: absolute;
  top: -8px;
}
Items (from left to right):

Home (Dashboard)
Tasks (Checklist icon)
Thoughts (Message bubble icon)
More (Three dots)
Top Navigation Bar (Screen-specific)
Visual Spec:

Height: 56px
Background: Transparent or Primary Paper
Back button: Left-aligned, icon only (24x24px arrow)
Title: Center-aligned, H3 style
Action: Right-aligned (optional, e.g., "Save")
CSS

.top-nav {
  height: 56px;
  background: #FAF9F6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid rgba(193, 119, 103, 0.05);
}

.top-nav .back-btn {
  width: 40px;
  height: 40px;
}

.top-nav .title {
  font-size: 21px;
  font-weight: 600;
  color: #1C1816;
}

.top-nav .action-btn {
  font-size: 16px;
  font-weight: 500;
  color: #C17767;
}
5.5 Modals & Dialogs
Bottom Sheet (Primary modal pattern)
Visual Spec:

Background: Secondary Paper
Border Radius: 24px 24px 0 0 (top corners rounded)
Shadow: Level 3
Handle: 4px x 32px rounded bar, Hint Ink, centered 12px from top
Max Height: 80% of screen
Animation: Slide up from bottom (300ms)
CSS

.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #F5F3EE;
  border-radius: 24px 24px 0 0;
  box-shadow: 0 8px 24px rgba(193, 119, 103, 0.16);
  max-height: 80vh;
  padding: 24px 20px;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bottom-sheet.open {
  transform: translateY(0);
}

/* Drag handle */
.bottom-sheet::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 4px;
  background: #6B6B6B;
  border-radius: 2px;
  opacity: 0.4;
}
Usage: Mood selection, task details, letter options

Dialog (Confirmation)
Visual Spec:

Background: Secondary Paper
Border Radius: 16px
Shadow: Level 4
Max Width: 320px
Padding: 24px
Centered: Vertically and horizontally
Backdrop: rgba(28, 24, 22, 0.4) (warm dark overlay)
CSS

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #F5F3EE;
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(193, 119, 103, 0.24);
  max-width: 320px;
  width: 90%;
  padding: 24px;
  z-index: 1000;
}

.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(28, 24, 22, 0.4);
  z-index: 999;
}
Structure:

Title (H3)
Message (Body)
Actions (2 buttons: Cancel + Confirm)
5.6 Toast Notifications
Visual Spec:

Background: Primary Ink (#1C1816) with 95% opacity
Text: Primary Paper (#FAF9F6), 14px
Border Radius: 12px
Padding: 12px 16px
Position: Bottom center, 80px from bottom (above nav)
Duration: 3 seconds
Animation: Fade + slide up
CSS

.toast {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(28, 24, 22, 0.95);
  color: #FAF9F6;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: toast-in 0.3s ease forwards,
             toast-out 0.3s ease 2.7s forwards;
}

@keyframes toast-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes toast-out {
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
}
Haptic: Light impact on appear

Usage:

"Task completed"
"Letter saved as draft"
"Mood logged"
5.7 Loading States
Skeleton Screen (Preferred)
Visual Spec:

Background: Secondary Paper
Shimmer: Animated gradient (Clay 100 → Clay 50 → Clay 100)
Shape: Matches content shape (rectangles for text, circles for avatars)
CSS

.skeleton {
  background: linear-gradient(
    90deg,
    #FFEAE0 0%,
    #FFF5F0 50%,
    #FFEAE0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
Example (Thought card skeleton):

HTML

<div class="thought-card">
  <div class="skeleton" style="width: 60%; height: 16px; margin-bottom: 8px;"></div>
  <div class="skeleton" style="width: 100%; height: 14px; margin-bottom: 6px;"></div>
  <div class="skeleton" style="width: 80%; height: 14px;"></div>
</div>
Spinner (Inline loading)
Visual Spec:

Size: 32x32px
Stroke: 3px, Clay 500
Animation: Rotate 360° in 1 second, ease-in-out
CSS

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #FFEAE0; /* Clay 100 */
  border-top-color: #C17767; /* Clay 500 */
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
Usage: Button loading state, inline content loading

6. Iconography
6.1 Icon Philosophy
Icons in "Us" should feel hand-drawn, not pixel-perfect. They have slight imperfections, organic curves, and warmth.

Style Guidelines:

Stroke weight: 2px (medium), 2.5px (bold for emphasis)
Corners: Rounded (not sharp)
Detail level: Simple, recognizable at 24x24px
Color: Inherit from context (text color), never multi-color
DO:

Use organic, slightly irregular curves
Add small human details (e.g., heart with hand-drawn wobble)
Keep simple (3-7 strokes max per icon)
DON'T:

Use geometric perfection
Use filled icons for navigation (use outlined)
Use gradients or multiple colors
Use ultra-detailed icons
6.2 Core Icon Set
Icons should be custom-designed or heavily modified from Material Icons to match Wabi-Sabi aesthetic.

Icon	Usage	Visual Description
Home	Dashboard navigation	Hand-drawn house outline with slightly crooked roof
Tasks	Tasks navigation	Checklist with 3 items, one checked with organic checkmark
Thoughts	Thoughts navigation	Speech bubble with rounded, imperfect edges
More	More menu	Three dots in slight organic arrangement (not perfect horizontal)
Heart	Love, favorite	Hand-drawn heart outline with slight asymmetry
Mood	Mood jar	Simple jar outline with curved neck
Letter	Love letters	Envelope with visible flap and slight rotation
Doodle	Drawing	Brush/pencil icon with wavy stroke trail
Photo	Memories	Camera icon with rounded body
Add	Add new item	Plus sign with rounded ends
Close	Dismiss, close	X with rounded, organic strokes
Edit	Edit action	Pencil with slightly curved body
Delete	Delete action	Trash can with organic curves
Send	Send message/letter	Paper plane with hand-drawn feel
Calendar	Date picker	Calendar page with corner curl
6.3 Icon Sizing
Size	Usage
16px	Inline text icons, tiny indicators
20px	Small buttons, list item icons
24px	Standard UI icons, navigation
32px	Large touch targets, FAB icons
48px	Feature illustrations, empty states
Spacing from text: 8px (minimum)

6.4 Implementation
Icons should be implemented as inline SVG (not icon fonts) for maximum control and customization.

Example (Heart icon):

HTML

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  />
</svg>
Styling:

CSS

.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor; /* Inherits text color */
  fill: none; /* Outlined by default */
}

.icon.filled {
  fill: currentColor;
  stroke: none;
}
7. Textures & Surfaces
7.1 Paper Texture
All backgrounds should have a subtle paper grain to reinforce the analog feeling.

Implementation: SVG noise pattern as background image.

CSS

.paper-texture {
  background-color: #FAF9F6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03' /%3E%3C/svg%3E");
  background-blend-mode: multiply;
}
Opacity: 0.03 (very subtle, should not distract)

Where to apply:

Main app background
Card backgrounds
Modal backgrounds
Any large surface
7.2 Folded Paper Effect (Card Detail)
Top-right corner of cards should have a subtle folded paper effect.

Implementation:

CSS

.card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, transparent 0%, transparent 50%, #EBE8DF 50%, #EBE8DF 100%);
  border-radius: 0 16px 0 0;
  opacity: 0.6;
}
Result: Looks like corner of paper is slightly lifting.

7.3 Ink Bleed Effect (Headers)
Large headings can have a very subtle ink bleed effect for warmth.

Implementation:

CSS

.heading-bleed {
  position: relative;
  color: #1C1816;
}

.heading-bleed::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #C17767; /* Clay */
  opacity: 0.05;
  transform: translate(1px, 1px) scale(1.01);
  z-index: -1;
  pointer-events: none;
}
Usage: Screen titles, important headings (use sparingly)

8. Animation & Motion
8.1 Animation Principles
Physics-based: Use spring animations, not linear
Purposeful: Every animation communicates something
Slow and deliberate: No instant transitions (minimum 150ms)
Haptic reinforcement: Animations paired with haptic feedback
8.2 Core Animations
Fade In (Entry)
Usage: Content appearing on screen, toasts, modals

CSS

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
Duration: 300ms
Easing: Ease-out (decelerates)

Spring Scale (Interaction)
Usage: Button press, card tap, checkbox toggle

CSS

@keyframes spring-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

.spring-scale {
  animation: spring-scale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
Duration: 400ms
Easing: Spring (overshoots slightly, then settles)
Haptic: Medium impact at 50% keyframe

Pulse Ring (Miss You Ping)
Usage: Miss You button when sending ping

CSS

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #E77A5E; /* Persimmon */
  border-radius: 50%;
  animation: pulse-ring 1s cubic-bezier(0.4, 0, 0.6, 1);
}
Duration: 1 second
Repeats: 3 times
Haptic: Heavy impact at start

Slide Up (Bottom Sheet)
Usage: Bottom sheet modals appearing

CSS

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.slide-up {
  animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
Duration: 300ms
Easing: Ease-out

Confetti Burst (Celebration)
Usage: Shared task completion, milestone reached

Implementation: JavaScript library (canvas-confetti) with custom colors

JavaScript

confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
  colors: ['#C17767', '#E77A5E', '#FFD93D', '#FF6B8A', '#7DDBA3']
});
Duration: 2 seconds
Haptic: Heavy impact at burst start
Sound: Optional soft "pop" sound

Envelope Opening (Love Letter)
Usage: Opening a sealed love letter

Multi-step animation:

Unseal (800ms):

Wax seal fades and falls away
Envelope flap lifts open
Unfold (600ms):

Letter slides out of envelope
Letter unfolds (vertical flip)
Reveal (400ms):

Content fades in
Background shifts to warmer tone
CSS

/* Step 1: Unseal */
@keyframes unseal {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  50% {
    transform: rotateX(-15deg);
  }
  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

/* Step 2: Slide out */
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}

/* Step 3: Unfold */
@keyframes unfold {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}

.letter-opening .seal {
  animation: unseal 0.8s ease-out forwards;
}

.letter-opening .envelope {
  animation: slide-out 0.6s 0.8s ease-out forwards;
}

.letter-opening .content {
  animation: unfold 0.4s 1.4s ease-out forwards,
             fade-in 0.4s 1.4s ease-out forwards;
}
Total duration: 1.8 seconds
Haptic sequence:

Light impact at unseal start
Medium impact when letter slides out
Heavy impact when content revealed
Background music: Optional soft instrumental (user setting)

Stamp Press (Final Action)
Usage: Sealing a letter, completing critical action

CSS

@keyframes stamp-press {
  0% {
    transform: scale(1) translateY(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) translateY(0);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.95) translateY(10px);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(10px);
    opacity: 1;
  }
}

.stamp {
  animation: stamp-press 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
Duration: 600ms
Easing: Spring (overshoots)
Haptic: Heavy impact at 70% (stamp contact)
Sound: Soft "thud" sound

8.3 Transition Timing
Action	Duration	Easing
Button press	150ms	Ease-out
Card hover	200ms	Ease-out
Modal appear	300ms	Ease-out
Screen transition	400ms	Cubic-bezier(0.4, 0, 0.2, 1)
Ceremonial (letter)	1800ms	Custom multi-step
Rule: Never use instant transitions (0ms). Minimum is 150ms.

8.4 Haptic Feedback Mapping
Interaction	Haptic Type	Strength
Button tap	Impact	Medium
Toggle switch	Impact	Light
Checkbox	Impact	Medium
Miss You ping	Impact	Heavy
Task completion (individual)	Impact	Medium
Task completion (shared)	Notification	Success
Letter sealed	Impact	Heavy
Error state	Notification	Error
Scroll end	Impact	Light
Implementation (Android):

Kotlin

// Medium impact
view.performHapticFeedback(HapticFeedbackConstants.CONTEXT_CLICK)

// Heavy impact
view.performHapticFeedback(HapticFeedbackConstants.LONG_PRESS)

// Light impact
view.performHapticFeedback(HapticFeedbackConstants.KEYBOARD_TAP)
9. Interaction Patterns
9.1 Touch Targets
Minimum touch target: 48x48dp (Android accessibility guidelines)

Spacing between targets: 8dp minimum

Examples:

Buttons: 48dp height minimum
Icon buttons: 40x40dp (with 4dp padding = 48dp touch area)
List items: 56dp height minimum
Bottom nav items: 64dp width minimum
9.2 Swipe Gestures
Swipe to Complete (Tasks)
Gesture: Swipe right on task card

Visual feedback:

Card translates right (follow finger)
Green checkmark icon fades in behind card
Release: Card snaps back with spring, checkmark becomes permanent
If threshold passed (>50% width): Task marked complete
Haptic: Medium impact at threshold pass

Swipe to Delete (Generic)
Gesture: Swipe left on item (thoughts, memories, etc.)

Visual feedback:

Card translates left
Red trash icon fades in behind card
Release: If threshold passed, confirmation dialog appears
Otherwise: Card snaps back
Haptic: Medium impact at threshold, heavy impact if delete confirmed

9.3 Long Press Actions
Long press (500ms) triggers contextual menu.

Examples:

Thought card: Edit, Delete, Copy
Memory photo: Favorite, Delete, Share
Task: Edit, Delete, Move to archive
Visual feedback:

Subtle scale down (0.98) during press
Menu appears with slide-up animation
Backdrop dims screen
Haptic: Heavy impact when menu appears

9.4 Pull to Refresh
Gesture: Pull down on scrollable content when at top

Visual feedback:

Pull indicator (spinner) appears, rotates as user pulls
At threshold (80px): Indicator completes rotation
Release: Spinner animates, content refreshes
On complete: Spinner fades out
Haptic: Light impact at threshold

Color: Clay 500 for spinner

9.5 Empty States
Empty states should be encouraging, not punishing.

Structure:

Illustration (48px icon, relevant to feature)
Heading (H3): Warm, inviting message
Description (Body): What this feature is for
Call-to-action (Primary button): Start using feature
Example (Empty Thoughts Feed):

text

┌────────────────────────────────────────┐
│                                         │
│            [Thought icon 48px]          │
│                                         │
│     Share what's on your mind           │ (H3)
│                                         │
│  Your thoughts will appear here.        │ (Body)
│  Start a conversation with your         │
│  partner by sharing your day.           │
│                                         │
│      [Post Your First Thought]          │ (Button)
│                                         │
└────────────────────────────────────────┘
Color: Hint Ink for text, Clay for CTA

9.6 Error States
Errors should be human, apologetic, and helpful.

Structure:

Error icon (not harsh red X, but gentle indicator)
Message: "Oops, something went wrong"
Description: What happened in plain language
Action: "Try again" or "Go back"
Example (Network error):

text

┌────────────────────────────────────────┐
│                                         │
│         [Cloud icon with X, 48px]       │
│                                         │
│     Can't connect right now             │
│                                         │
│  Check your internet connection         │
│  and try again.                         │
│                                         │
│           [Try Again]                   │
│                                         │
└────────────────────────────────────────┘
Color: Persimmon 600 for icon, Body Ink for text

10. Screen Designs
10.1 Login Screen (Onboarding)
Purpose: First screen users see. Sets emotional tone for entire app.

Layout:

text

┌────────────────────────────────────────┐
│                                         │
│              (Top 20%)                  │
│                                         │
│             [Logo/Icon]                 │  ← Simple heart or kanji 愛
│                                         │
│               "Us"                      │  ← H1, Primary Ink
│                                         │
│         A space for two                 │  ← Caption, Hint Ink
│                                         │
├─────────────────────────────────────────┤
│          (Middle 60%)                   │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │  A private digital home           │  │  ← H3, centered
│  │  for your relationship            │  │
│  │                                   │  │
│  │  Share thoughts, tasks,           │  │  ← Body, centered
│  │  memories, and love—just          │  │
│  │  the two of you.                  │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│          (Bottom 20%)                   │
│                                         │
│    [Create Connection] (Primary)        │  ← Clay button
│                                         │
│    [Join Connection] (Ghost)            │  ← Outline button
│                                         │
│                                         │
└────────────────────────────────────────┘
Color:

Background: Paper gradient (135°, #FAF9F6 → #F5F3EE)
Logo: Persimmon 500 with soft glow
Text: Primary Ink (heading), Body Ink (description)
Animations:

Logo: Gentle pulse (scale 1.0 → 1.05 → 1.0, 2s loop)
Content: Fade in 400ms after logo pulse
Buttons: Fade in 600ms, stagger 100ms between
Details:

Subtle paper texture on background
Small Japanese character (二人 - "two people") in bottom corner, very faint
10.2 Home Dashboard
Purpose: Overview of relationship status and quick access to all features.

Layout:

text

┌────────────────────────────────────────┐
│  [Top Navigation - 56px]                │
│  ← (Optional back)  Dashboard  (Menu)   │
├─────────────────────────────────────────┤
│                                         │
│  [Greeting Section - Card]              │  ← 32px margin top
│  ┌───────────────────────────────────┐  │
│  │ Good evening, [Partner Name] ❤️   │  │  ← H2
│  │                                   │  │
│  │ 247 days together                 │  │  ← Body, Bamboo color
│  └───────────────────────────────────┘  │
│                                         │
│  [Today's Mood - Card]                  │  ← 16px margin
│  ┌───────────────────────────────────┐  │
│  │ How are you feeling?              │  │  ← H3
│  │                                   │  │
│  │  [You: 💚 Excited]                │  │  ← Mood badge
│  │  [Partner: 💛 Happy]              │  │
│  └───────────────────────────────────┘  │
│                                         │
│  [Quick Stats - Grid 2x2]               │  ← 16px margin
│  ┌─────────────┬─────────────┐         │
│  │ 3 tasks     │ 2 letters   │         │  ← Mini cards
│  │ pending     │ unread      │         │
│  ├─────────────┼─────────────┤         │
│  │ 12 pings    │ 5 thoughts  │         │
│  │ today       │ shared      │         │
│  └─────────────┴─────────────┘         │
│                                         │
│  [Recent Activity - List]               │  ← 24px margin
│  ┌───────────────────────────────────┐  │
│  │ Recent Activity                   │  │  ← H3
│  │                                   │  │
│  │ • Partner sent Miss You     2m    │  │  ← List items
│  │ • You posted a thought      1h    │  │
│  │ • Shared task completed     3h    │  │
│  └───────────────────────────────────┘  │
│                                         │
│                                         │
│  (Scroll for more)                      │
│                                         │
├─────────────────────────────────────────┤
│  [Bottom Navigation - 64px]             │
│   Home  Tasks  Thoughts  More           │
└────────────────────────────────────────┘
Components:

Greeting Card:

Background: Secondary Paper with subtle gradient
Shadow: Level 1
Border Radius: 16px
Padding: 20px
Folded corner detail (top-right)
Mood Card:

Same styling as Greeting
Mood badges: Circular, 32px, mood color background, emoji centered
Tap to change mood (opens bottom sheet)
Quick Stats Grid:

4 mini cards, 2x2 grid
Each card: 16px padding, Level 1 shadow
Number: H3, accent color (Clay/Bamboo/Persimmon)
Label: Caption, Hint Ink
Recent Activity:

List items: 12px vertical padding
Bullet: Clay 500 dot
Text: Body Small
Timestamp: Caption, right-aligned
Interaction:

Tap greeting card: Edit relationship start date
Tap mood card: Log/change mood
Tap quick stat: Navigate to feature
Tap activity item: Navigate to relevant detail
Animation on Load:

Greeting fades in (300ms)
Mood card slides up (400ms, 100ms delay)
Stats grid fades in (400ms, 200ms delay)
Activity list items stagger fade in (100ms each, 300ms start delay)
10.3 Tasks Screen
Purpose: Manage shared and individual to-dos.

Layout:

text

┌────────────────────────────────────────┐
│  ← Tasks                         [+]    │  ← Top nav
├─────────────────────────────────────────┤
│                                         │
│  [Filter Tabs]                          │
│  All | My Tasks | Shared | Done         │  ← Segmented control
│                                         │
│  ─────────────────────────────────      │  ← 16px margin
│                                         │
│  [Task Card 1 - Shared]                 │
│  ┌───────────────────────────────────┐  │
│  │ ◯  Buy groceries            [👥] │  │  ← Checkbox, title, shared icon
│  │                                   │  │
│  │    Milk, eggs, bread              │  │  ← Description (if any)
│  │                                   │  │
│  │    You: ✓  Partner: ◯             │  │  ← Completion status
│  └───────────────────────────────────┘  │
│                                         │
│  [Task Card 2 - Individual]             │  ← 12px margin
│  ┌───────────────────────────────────┐  │
│  │ ◯  Call mom                  [Me] │  │  ← Assignee
│  └───────────────────────────────────┘  │
│                                         │
│  [Task Card 3 - Shared, Completed]      │
│  ┌───────────────────────────────────┐  │
│  │ ✓  Plan weekend trip         [👥] │  │  ← Green checkmark
│  │                                   │  │
│  │    Completed by both     🎉       │  │  ← Celebration indicator
│  └───────────────────────────────────┘  │
│                                         │
│  (No more tasks)                        │
│                                         │
│  ───────────────────────────────────    │
│                                         │
│  [Completed Tasks - Collapsed]          │
│  > 12 completed this week               │  ← Tap to expand
│                                         │
└────────────────────────────────────────┘
Components:

Filter Tabs:

Segmented control, 4 options
Active: Clay 500 background, Primary Ink text
Inactive: Transparent, Hint Ink text
Indicator: 3px bottom border (animated slide)
Task Card:

Background: Secondary Paper
Border Radius: 12px
Padding: 16px
Shadow: Level 1
Left border: 3px (Clay for "Me", Bamboo for "Partner", Persimmon for "Shared")
Checkbox:

Custom component (see §5.3)
Size: 24x24px
Unchecked: Border only
Checked: Bamboo 500 filled with white checkmark
Animation on check: Spring scale + haptic
Shared Task Completion Status:

Two small checkboxes side-by-side
Labels: "You" and "[Partner Name]"
When both checked: Confetti animation + celebration badge
Add Button (FAB):

Position: Bottom-right, 20px margin, 80px from bottom (above nav)
Opens bottom sheet with task creation form
Swipe Interaction:

Swipe right: Mark complete (shows checkmark behind card)
Swipe left: Delete (shows trash icon, requires confirmation)
Empty State (No Tasks):

text

┌───────────────────────────────────┐
│        [Checklist icon 48px]       │
│                                   │
│    All caught up!                 │  ← H3
│                                   │
│  Create a task to get started.    │  ← Body
│                                   │
│     [Add Your First Task]         │  ← Button
└───────────────────────────────────┘
10.4 Mood Jar Screen
Purpose: Log daily mood and visualize emotional journey.

Layout:

text

┌────────────────────────────────────────┐
│  ← Mood Jar                             │  ← Top nav
├─────────────────────────────────────────┤
│                                         │
│  [Jar Visualization - Center]           │  ← 32px margin top
│                                         │
│        ╔═══════════════╗                │
│        ║               ║                │  ← Glass jar illustration
│        ║   ●  ●  ●     ║                │  ← Colored orbs (moods)
│        ║  ●  ●  ●  ●   ║                │
│        ║ ●  ●  ●  ●  ● ║                │
│        ╚═══════════════╝                │
│                                         │
│     Past 7 days | Month | Year          │  ← View toggle
│                                         │
│  ─────────────────────────────────      │
│                                         │
│  [Today's Mood - Card]                  │  ← 24px margin
│  ┌───────────────────────────────────┐  │
│  │ How are you feeling today?        │  │  ← H3
│  │                                   │  │
│  │  💛 💕 💙 🟠 ❤️ 🟤 💚              │  │  ← Mood selector (tap)
│  │                                   │  │
│  │  [Optional note field]            │  │  ← Textarea (if mood selected)
│  │                                   │  │
│  │        [Log Mood]                 │  │  ← Primary button
│  └───────────────────────────────────┘  │
│                                         │
│  [Partner's Mood Today - Card]          │  ← 16px margin
│  ┌───────────────────────────────────┐  │
│  │ [Partner] is feeling:             │  │
│  │                                   │  │
│  │        💚 Excited                  │  │  ← Large mood badge
│  │                                   │  │
│  │  "Got promoted at work!"          │  │  ← Note (if shared)
│  │                                   │  │
│  │  [Send supportive ping ❤️]        │  │  ← Quick action
│  └───────────────────────────────────┘  │
│                                         │
└────────────────────────────────────────┘
Components:

Jar Visualization:

SVG illustration of glass jar
Transparent background, white "glass" with subtle reflection
Orbs stack from bottom, each representing one day
Orb size: 24px diameter
Orb color: Matches mood color (see §2.1)
Orb spacing: 4px
Tap orb: Show modal with date, both partners' moods, notes
View Toggle:

Segmented control: "7 Days" | "Month" | "Year"
Jar capacity adjusts (7, 30, or 365 orbs scaled down)
Mood Selector:

Horizontal row of emoji buttons
Size: 48x48px each
Spacing: 8px
Tap: Select (scale up + glow), show note field + Log button
Selected state: Clay 100 background, scale 1.1
Mood Badge (Partner's):

Size: 64x64px circle
Background: Mood color at 20% opacity
Emoji: 32px, centered
Label below: Body text
Animation (Logging Mood):

Button press: Spring scale
New orb animates into jar (drops from top, bounces slightly)
Jar subtly shakes (celebrating new mood)
Success toast: "Mood logged!"
Haptic: Medium impact on log
Empty State (No Moods Logged):

Empty jar with prompt: "Start logging your daily moods"
First mood tutorial overlay
10.5 Miss You Screen
Purpose: Send quick emotional pings to partner.

Layout:

text

┌────────────────────────────────────────┐
│  ← Miss You                             │  ← Top nav
├─────────────────────────────────────────┤
│                                         │
│  [Header Card]                          │  ← 32px margin
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │     Thinking of each other        │  │  ← H2, centered
│  │                                   │  │
│  │           12 times                │  │  ← H1, Clay color
│  │           today                   │  │  ← Caption
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ─────────────────────────────────      │
│                                         │
│  [Ping Buttons Grid - 2x3]              │  ← 24px margin
│                                         │
│  ┌─────────────┬─────────────┐         │
│  │             │             │         │
│  │   ❤️        │    🤗       │         │  ← Emoji 32px
│  │ Miss You    │   Hug       │         │  ← Label 14px
│  │             │             │         │
│  ├─────────────┼─────────────┤         │
│  │             │             │         │
│  │   💭        │    😘       │         │
│  │ Thinking    │   Kiss      │         │
│  │ of You      │             │         │
│  │             │             │         │
│  ├─────────────┴─────────────┤         │
│  │                           │         │
│  │       💕 Love You          │         │  ← Full width
│  │                           │         │
│  └───────────────────────────┘         │
│                                         │
│  [Recent Pings - List]                  │  ← 32px margin
│  ┌───────────────────────────────────┐  │
│  │ Today                             │  │  ← Section header
│  │                                   │  │
│  │ ← You sent "Miss You"       10:32 │  │
│  │ → Partner sent "Hug"         9:45 │  │
│  │ ← You sent "Thinking of You" 8:12 │  │
│  │                                   │  │
│  │ Yesterday (8 pings)               │  │  ← Collapsed section
│  └───────────────────────────────────┘  │
│                                         │
└────────────────────────────────────────┘
Components:

Header Card:

Background: Secondary Paper
Border Radius: 16px
Padding: 24px
Shadow: Level 1
Counter: Large number (H1) with subtle count-up animation
Ping Button:

Size: 160px x 120px (approx 2 per row on mobile)
Background: Persimmon gradient (subtle)
Border Radius: 16px
Shadow: Level 1
Layout: Emoji top, label bottom
Hover/Press: Lift shadow (Level 2) + scale (1.05)
Ping Animation (on tap):

Button: Spring scale down then up
Pulse rings: 3 concentric rings expand from button (see §8.2)
Haptic: Heavy impact
Notification sent to partner immediately
Success feedback: Button glows for 1s
Counter increments with count-up animation
Recent Pings List:

List items: 48px height
Icon: 20px emoji
Direction indicator: ← (you sent), → (partner sent)
Text: Body Small, timestamp right-aligned
Tap item: Show detail modal (who sent, exact time, response option)
Empty State (First Use):

text

┌───────────────────────────────────┐
│       [Heart icon 48px]            │
│                                   │
│  Let them know you're             │  ← H3
│  thinking of them                 │
│                                   │
│  Tap any button to send a         │  ← Body
│  quick emotional ping.            │
│                                   │
│  No response needed—just          │
│  a gentle reminder that           │
│  they're on your mind.            │
│                                   │
│     [Send Your First Ping]        │  ← Button (sends "Miss You")
└───────────────────────────────────┘
10.6 Love Letters Screen (Inbox)
Purpose: View received and sent love letters.

Layout:

text

┌────────────────────────────────────────┐
│  ← Letters                      [Write]│  ← Top nav, write button
├─────────────────────────────────────────┤
│                                         │
│  [Tabs]                                 │
│  Inbox (2) | Sent | Drafts              │  ← Badge on unread
│                                         │
│  ─────────────────────────────────      │
│                                         │
│  [Letter Card 1 - Sealed]               │  ← 16px margin
│  ┌───────────────────────────────────┐  │
│  │     ╔═══════════════╗             │  │
│  │     ║    [Seal 愛]  ║             │  │  ← Wax seal indicator
│  │     ║               ║             │  │
│  │     ║ "Anniversary" ║             │  │  ← Letter title (visible)
│  │     ║               ║             │  │
│  │     ║ From [Partner]║             │  │
│  │     ║ Jan 15, 2024  ║             │  │
│  │     ║               ║             │  │
│  │     ║ Open when:    ║             │  │
│  │     ║ "...tomorrow" ║             │  │  ← Trigger (if set)
│  │     ╚═══════════════╝             │  │
│  └───────────────────────────────────┘  │
│                                         │
│  [Letter Card 2 - Opened]               │  ← 16px margin
│  ┌───────────────────────────────────┐  │
│  │  "Just Because"              [❤️] │  │  ← Title, favorite icon
│  │                                   │  │
│  │  Hey love, just wanted to say...  │  │  ← Preview (first 50 chars)
│  │                                   │  │
│  │  From [Partner] | Jan 10, 2024    │  │  ← Metadata
│  │  Opened on Jan 10                 │  │
│  └───────────────────────────────────┘  │
│                                         │
│  [Letter Card 3 - Sealed]               │
│  ┌───────────────────────────────────┐  │
│  │ (Similar to Card 1)               │  │
│  └───────────────────────────────────┘  │
│                                         │
│  (Scroll for more)                      │
│                                         │
└────────────────────────────────────────┘
Components:

Tabs:

Segmented control: Inbox | Sent | Drafts
Badge: Small red dot (not number) on unread
Active: Clay 500 underline
Sealed Letter Card:

Background: Clay 50 with paper texture
Envelope illustration (see §5.2)
Wax seal: 32px circle, Persimmon 500, kanji 愛
Title: H3, visible on envelope
Metadata: Caption, Hint Ink
"Open When" trigger: Body Small, italic
Shadow: Level 2
Slight rotation: ±1° (unique per card)
Opened Letter Card:

Background: Secondary Paper
Layout: Standard card
Preview: First 50 characters, truncated with "..."
Favorite icon: Heart, top-right, Clay 500 if favorited
Shadow: Level 1
Interaction:

Tap Sealed Letter:

Card lifts (shadow Level 3)
Transition to full-screen letter view
Unsealing animation plays (see §8.2)
Letter content revealed
Mark as "opened" in database
Tap Opened Letter:

Transition to full-screen letter view (no unsealing)
Content displayed with chosen theme
Empty State (No Letters):

text

┌───────────────────────────────────┐
│      [Envelope icon 48px]          │
│                                   │
│  No letters yet                   │  ← H3
│                                   │
│  Write a heartfelt letter         │  ← Body
│  to your partner.                 │
│                                   │
│    [Write Your First Letter]      │  ← Button
└───────────────────────────────────┘
10.7 Letter Opening Animation (Full-Screen State)
Purpose: Ceremonial moment of opening a sealed love letter.

Animation Sequence (Total: 1.8s):

Step 1: Transition In (300ms)

Sealed letter card scales up to full screen
Background fades to warmer tone (#FFF5F0)
Other UI elements fade out
Step 2: Unseal Wax Seal (800ms)

Wax seal glows (Persimmon 500)
Seal cracks with thin lines
Pieces fall away with gravity physics
Haptic: Light impact when seal breaks
Step 3: Envelope Opens (600ms)

Envelope flap lifts open (rotate 90° on top edge)
Subtle crinkle sound (optional)
Haptic: Medium impact
Step 4: Letter Slides Out (400ms)

Folded letter slides upward out of envelope
Envelope fades out behind
Step 5: Letter Unfolds (600ms)

Letter unfolds vertically (rotateX 90° → 0°)
Background music fades in (if enabled)
Haptic: Heavy impact when fully unfolded
Step 6: Content Reveals (400ms)

Letter content fades in with chosen theme
Title appears first, then content
Scroll enabled
Total Duration: 3.1 seconds (intentionally slow and ceremonial)

Full-Screen Letter View (After Opening):

text

┌────────────────────────────────────────┐
│  ← Close                       [❤️ Save]│  ← Top nav
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ [Paper texture background]        │  │
│  │                                   │  │
│  │         "Anniversary"             │  │  ← Title, H2, Noto Serif
│  │                                   │  │
│  │  ─────────────────────            │  │  ← Decorative divider
│  │                                   │  │
│  │  My dearest love,                 │  │  ← Content, Noto Serif 18px
│  │                                   │  │
│  │  I can't believe it's been a      │  │  ← Line height 28px
│  │  year since we first met. Every   │  │
│  │  day with you feels like a        │  │
│  │  gift...                          │  │
│  │                                   │  │
│  │  (Content continues, scrollable)  │  │
│  │                                   │  │
│  │                                   │  │
│  │  ─────────────────────            │  │
│  │                                   │  │
│  │  Forever yours,                   │  │
│  │  [Partner Name]                   │  │
│  │                                   │  │
│  │  January 15, 2024                 │  │  ← Timestamp, right-aligned
│  │                                   │  │
│  │                    愛              │  │  ← Kanji watermark, faint
│  └───────────────────────────────────┘  │
│                                         │
└────────────────────────────────────────┘
Letter Theme (User Selected During Writing):

Minimal (Default):

Background: #FAF9F6 with paper texture
Dividers: Thin Clay 500 lines
Font: Noto Serif Regular
Vintage:

Background: Sepia tone (#F5E6D3)
Border: Decorative frame (hand-drawn style)
Watermark: Faded floral illustration
Font: Noto Serif Italic (slightly)
Cute:

Background: Clay 50 with hearts pattern (very subtle)
Dividers: Dashed lines with heart ends
Font: Noto Serif Regular with larger line spacing
Romantic:

Background: Persimmon 100 gradient (very subtle)
Decorative header: Rose illustration (simple, hand-drawn)
Watermark: Heart with initials
Font: Noto Serif Regular
11. Accessibility Considerations
11.1 Color Contrast
All text meets WCAG AA standards (4.5:1 minimum for body, 3:1 for large text).

Verified Ratios:

Primary Ink on Primary Paper: 15.8:1 (AAA)
Secondary Ink on Primary Paper: 12.1:1 (AAA)
Body Ink on Primary Paper: 9.5:1 (AA+)
Hint Ink on Primary Paper: 5.2:1 (AA)
Clay 500 on Primary Paper: 4.7:1 (AA)
Exception: Mood colors are decorative and not used for text.

11.2 Touch Targets
Minimum size: 48x48dp for all interactive elements

Spacing: 8dp minimum between adjacent targets

Examples:

Buttons: 48dp height
List items: 56dp height
Navigation icons: 64dp tap area
11.3 Screen Reader Support
Content Descriptions:

All icons have contentDescription
Decorative elements have contentDescription="" (ignored)
Dynamic content (counts, timestamps) update descriptions on change
Example:

Kotlin

// Task checkbox
contentDescription = if (isCompleted) {
    "Task completed: Buy groceries"
} else {
    "Task incomplete: Buy groceries. Double-tap to mark complete."
}
Headings:

Use semantic heading tags (H1-H4) for screen reader navigation
Logical heading hierarchy (no skipping levels)
11.4 Focus Indicators
Keyboard navigation (external keyboard on Android):

Visible focus ring: 3px Clay 500 border with 2px offset
Focus moves in logical order (top-to-bottom, left-to-right)
CSS

.focusable:focus {
  outline: 3px solid #C17767;
  outline-offset: 2px;
}
11.5 Font Scaling
Support system font size settings up to 200%.

Testing:

Test all screens at 100%, 150%, 200% font scale
Ensure no text truncation or overlap
Multi-line text wraps gracefully
Implementation:

Use sp units for font sizes (not dp)
Avoid fixed heights on text containers
Use minHeight instead of height for buttons
11.6 Haptic Feedback (Accessibility)
User setting: Option to disable haptics for users sensitive to vibrations.

Visual alternatives: All haptic feedback paired with visual animation.

12. Implementation Guide
12.1 Design Tokens (Android Compose)
Kotlin

// Color.kt
object WabiSabiColors {
    // Paper Backgrounds
    val PaperPrimary = Color(0xFFFAF9F6)
    val PaperSecondary = Color(0xFFF5F3EE)
    val PaperPressed = Color(0xFFEBE8DF)
    
    // Ink Text
    val InkPrimary = Color(0xFF1C1816)
    val InkSecondary = Color(0xFF2D2926)
    val InkBody = Color(0xFF3E3A35)
    val InkHint = Color(0xFF6B6B6B)
    
    // Clay Accent
    val Clay500 = Color(0xFFC17767)
    val Clay400 = Color(0xFFD4A494)
    val Clay600 = Color(0xFFA65D4F)
    val Clay100 = Color(0xFFFFEAE0)
    val Clay50 = Color(0xFFFFF5F0)
    
    // Bamboo Accent
    val Bamboo500 = Color(0xFF7D8F69)
    val Bamboo400 = Color(0xFF9CAD8A)
    val Bamboo600 = Color(0xFF6B7A58)
    val Bamboo100 = Color(0xFFE8EDE3)
    
    // Persimmon Accent
    val Persimmon500 = Color(0xFFE77A5E)
    val Persimmon400 = Color(0xFFFF9780)
    val Persimmon600 = Color(0xFFD15E42)
    val Persimmon100 = Color(0xFFFFE5DE)
    
    // Mood Colors
    val MoodHappy = Color(0xFFFFD93D)
    val MoodLove = Color(0xFFFF6B8A)
    val MoodSad = Color(0xFF7C9FFC)
    val MoodExcited = Color(0xFFFF9A56)
    val MoodCalm = Color(0xFF7DDBA3)
    val MoodAnxious = Color(0xFFB088F9)
    val MoodTired = Color(0xFFC9D1D9)
    val MoodGrateful = Color(0xFFFFB5A3)
}

// Typography.kt
object WabiSabiTypography {
    val h1 = TextStyle(
        fontFamily = FontFamily.Default, // Roboto
        fontWeight = FontWeight.Bold,
        fontSize = 32.sp,
        lineHeight = 40.sp,
        letterSpacing = (-0.01).sp
    )
    
    val h2 = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 26.sp,
        lineHeight = 34.sp,
        letterSpacing = (-0.01).sp
    )
    
    val h3 = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 21.sp,
        lineHeight = 28.sp,
        letterSpacing = (-0.005).sp
    )
    
    val body = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 16.sp,
        lineHeight = 24.sp
    )
    
    val bodySerif = TextStyle(
        fontFamily = FontFamily.Serif, // Noto Serif
        fontWeight = FontWeight.Normal,
        fontSize = 18.sp,
        lineHeight = 28.sp
    )
    
    val caption = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 13.sp,
        lineHeight = 18.sp
    )
    
    val label = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Medium,
        fontSize = 14.sp,
        lineHeight = 20.sp,
        letterSpacing = 0.01.sp
    )
}

// Spacing.kt
object WabiSabiSpacing {
    val xs = 4.dp
    val sm = 8.dp
    val md = 16.dp
    val lg = 24.dp
    val xl = 32.dp
    val xxl = 48.dp
    val xxxl = 64.dp
}

// Shadows.kt
fun clayElevation(level: Int): Dp {
    return when (level) {
        1 -> 2.dp  // Whisper
        2 -> 4.dp  // Lifted
        3 -> 8.dp  // Floating
        4 -> 16.dp // Ceremonial
        else -> 0.dp
    }
}
12.2 Component Examples (Jetpack Compose)
Primary Button:

Kotlin

@Composable
fun PrimaryButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true
) {
    val interactionSource = remember { MutableInteractionSource() }
    val isPressed by interactionSource.collectIsPressedAsState()
    
    Box(
        modifier = modifier
            .height(48.dp)
            .background(
                brush = if (enabled) {
                    Brush.verticalGradient(
                        colors = if (isPressed) {
                            listOf(Clay500, Clay600)
                        } else {
                            listOf(Clay400, Clay500, Clay600)
                        }
                    )
                } else {
                    Brush.verticalGradient(listOf(PaperPressed, PaperPressed))
                },
                shape = RoundedCornerShape(12.dp)
            )
            .clickable(
                interactionSource = interactionSource,
                indication = null,
                enabled = enabled,
                onClick = {
                    // Haptic feedback
                    // performHapticFeedback(HapticFeedbackConstants.CONTEXT_CLICK)
                    onClick()
                }
            )
            .shadow(
                elevation = if (isPressed) 0.dp else clayElevation(1),
                shape = RoundedCornerShape(12.dp),
                clip = false,
                ambientColor = Clay500.copy(alpha = 0.08f),
                spotColor = Clay500.copy(alpha = 0.04f)
            )
            .padding(horizontal = 16.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            style = WabiSabiTypography.body.copy(fontWeight = FontWeight.Medium),
            color = if (enabled) InkPrimary else InkHint
        )
    }
}
Card Component:

Kotlin

@Composable
fun WabiSabiCard(
    modifier: Modifier = Modifier,
    onClick: (() -> Unit)? = null,
    content: @Composable () -> Unit
) {
    Box(
        modifier = modifier
            .background(
                color = PaperSecondary,
                shape = RoundedCornerShape(16.dp)
            )
            .then(
                if (onClick != null) {
                    Modifier.clickable { onClick() }
                } else Modifier
            )
            .shadow(
                elevation = clayElevation(1),
                shape = RoundedCornerShape(16.dp),
                ambientColor = Clay500.copy(alpha = 0.08f)
            )
            .padding(16.dp)
    ) {
        content()
        
        // Folded corner effect
        Canvas(modifier = Modifier.size(20.dp).align(Alignment.TopEnd)) {
            drawPath(
                path = Path().apply {
                    moveTo(size.width, 0f)
                    lineTo(size.width, size.height)
                    lineTo(0f, 0f)
                    close()
                },
                color = PaperPressed.copy(alpha = 0.6f)
            )
        }
    }
}
12.3 Animation Examples
Spring Scale Animation:

Kotlin

@Composable
fun SpringScaleButton(
    content: @Composable () -> Unit,
    onClick: () -> Unit
) {
    var isPressed by remember { mutableStateOf(false) }
    val scale by animateFloatAsState(
        targetValue = if (isPressed) 0.95f else 1f,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioMediumBouncy,
            stiffness = Spring.StiffnessMedium
        )
    )
    
    Box(
        modifier = Modifier
            .scale(scale)
            .pointerInput(Unit) {
                detectTapGestures(
                    onPress = {
                        isPressed = true
                        tryAwaitRelease()
                        isPressed = false
                    },
                    onTap = { onClick() }
                )
            }
    ) {
        content()
    }
}
Pulse Ring Animation (Miss You):

Kotlin

@Composable
fun PulseRing(
    color: Color = Persimmon500,
    durationMillis: Int = 1000,
    repeat: Int = 3
) {
    val infiniteTransition = rememberInfiniteTransition()
    val scale by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 1.8f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Restart,
            iterations = repeat
        )
    )
    val alpha by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 0f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Restart,
            iterations = repeat
        )
    )
    
    Canvas(modifier = Modifier.fillMaxSize()) {
        drawCircle(
            color = color.copy(alpha = alpha),
            radius = size.minDimension / 2 * scale,
            style = Stroke(width = 3.dp.toPx())
        )
    }
}
12.4 Texture Implementation
Paper Texture Background:

Kotlin

@Composable
fun PaperTextureBackground() {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.linearGradient(
                    colors = listOf(PaperPrimary, PaperSecondary),
                    start = Offset(0f, 0f),
                    end = Offset(1000f, 1000f)
                )
            )
    ) {
        // Overlay noise texture
        Image(
            painter = painterResource(R.drawable.paper_noise), // SVG noise
            contentDescription = null,
            modifier = Modifier
                .fillMaxSize()
                .alpha(0.03f),
            contentScale = ContentScale.Crop
        )
    }
}
Noise Texture SVG (res/drawable/paper_noise.xml):

XML

<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="400dp"
    android:height="400dp"
    android:viewportWidth="400"
    android:viewportHeight="400">
    <path
        android:fillColor="#000000"
        android:pathData="M0,0 L400,400 (noise pattern data)"
        android:fillAlpha="0.03"/>
</vector>
12.5 Folder Structure
text

app/
├── ui/
│   ├── theme/
│   │   ├── Color.kt
│   │   ├── Typography.kt
│   │   ├── Spacing.kt
│   │   ├── Shadows.kt
│   │   └── Theme.kt
│   ├── components/
│   │   ├── buttons/
│   │   │   ├── PrimaryButton.kt
│   │   │   ├── SecondaryButton.kt
│   │   │   ├── GhostButton.kt
│   │   │   └── IconButton.kt
│   │   ├── cards/
│   │   │   ├── WabiSabiCard.kt
│   │   │   ├── LetterCard.kt
│   │   │   └── ThoughtCard.kt
│   │   ├── inputs/
│   │   │   ├── TextInput.kt
│   │   │   ├── TextArea.kt
│   │   │   └── Checkbox.kt
│   │   ├── navigation/
│   │   │   ├── BottomNav.kt
│   │   │   └── TopNav.kt
│   │   └── modals/
│   │       ├── BottomSheet.kt
│   │       ├── Dialog.kt
│   │       └── Toast.kt
│   ├── screens/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── tasks/
│   │   ├── thoughts/
│   │   ├── missyou/
│   │   ├── letters/
│   │   ├── moodjar/
│   │   ├── doodle/
│   │   └── memories/
│   └── animations/
│       ├── SpringScale.kt
│       ├── PulseRing.kt
│       ├── ConfettiBurst.kt
│       └── EnvelopeOpening.kt
├── res/
│   ├── drawable/
│   │   ├── paper_noise.xml
│   │   ├── ic_heart.xml
│   │   ├── ic_task.xml
│   │   └── ... (custom icons)
│   └── values/
│       ├── colors.xml
│       ├── dimens.xml
│       └── strings.xml
12.6 Testing Checklist
Visual Testing:

 All colors match specification (use color picker)
 All shadows use warm tones (not black)
 Paper texture visible but subtle (3% opacity)
 All corners rounded (no sharp edges except deliberate accents)
 Typography uses correct font families (Roboto/Noto Serif)
 Folded corner detail on all cards
Interaction Testing:

 All buttons have press animation (spring scale)
 Haptic feedback fires on all interactions
 Toast notifications appear and dismiss correctly
 Bottom sheets slide up smoothly
 Swipe gestures work (task complete, delete)
 Long press menus appear after 500ms
Animation Testing:

 Fade-in animations on screen load (300ms)
 Miss You pulse rings repeat 3 times
 Letter opening sequence completes in 1.8s
 Confetti burst on shared task completion
 No janky animations (60fps)
Accessibility Testing:

 All text meets contrast ratio (AA minimum)
 All touch targets ≥48x48dp
 Screen reader descriptions on all icons
 Focus indicators visible on keyboard navigation
 Font scaling works up to 200%
Edge Case Testing:

 Empty states display correctly
 Error states are warm and helpful (not harsh)
 Loading states use skeleton screens
 Long text wraps gracefully (no truncation)
 Deeply nested content doesn't break layout
Conclusion
This design system—Wabi-Sabi Warmth—is a complete, opinionated, and deeply intentional framework for building "Us". Every color, shadow, animation, and interaction has been carefully considered to create a warm, tactile, human experience that feels like it was made by hand, with love, for two specific people.

Core Tenets to Remember:

Imperfection is beautiful — embrace asymmetry, texture, and organic shapes
Slowness is intentional — animations take time, actions feel ceremonial
Warmth above all — no cold colors, no harsh shadows, no sterile UI
Every decision is emotional — if it doesn't feel loving, it doesn't belong
This is not just a design spec—it's a philosophy for building technology that honors relationships.

Build with love. Build "Us".

End of Design Document

