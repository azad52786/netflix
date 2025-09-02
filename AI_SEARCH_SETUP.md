# AI Movie Search Setup Instructions

## Get Your Gemini API Key

1. **Visit Google AI Studio**: Go to [Google AI Studio](https://makersuite.google.com/app/apikey)

2. **Sign in**: Use your Google account to sign in

3. **Create API Key**: 
   - Click "Create API Key"
   - Select or create a project
   - Copy the generated API key

4. **Add to Environment**:
   - Open your `.env` file in the project root
   - Replace `your_gemini_api_key_here` with your actual API key:
   ```
   REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
   ```

5. **Restart Development Server**:
   ```bash
   npm start
   ```

## How to Use AI Movie Search

1. Navigate to the Movie GPT page in your app
2. Type your movie preferences in natural language, for example:
   - "action movies with high ratings"
   - "romantic comedies from the 2000s"
   - "sci-fi thrillers with good reviews"
   - "family-friendly animated movies"
   - "horror movies that are not too scary"

3. Click "Search" and let AI analyze your request
4. Browse through the personalized recommendations

## Features

- **Smart Analysis**: AI understands context and preferences
- **Genre Recognition**: Recognizes genre preferences from natural language
- **Rating Consideration**: Takes into account movie ratings when requested
- **Fallback Search**: Provides keyword-based results if AI analysis fails
- **Visual Cards**: Beautiful movie cards with ratings, categories, and descriptions

## Notes

- The AI searches through your existing movie database (from TMDB)
- Free tier of Gemini API should be sufficient for personal use
- Results are based on movies already loaded in your app
